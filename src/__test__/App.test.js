import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store";
import ComicItem from "../components/ComicItem";
import Favorites from "../components/Favorites";

const MockApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const MockFavorite = ({ favorites }) => {
  return (
    <Provider store={store}>
      <Favorites favorites={favorites} />
    </Provider>
  );
};

const MockComicItem = ({ comic }) => {
  return (
    <Provider store={store}>
      <ComicItem comic={comic} />
    </Provider>
  );
};

describe("#Comic display test", () => {
  test("Each comic within the list should have a button to add to the list", () => {
    const comic = {
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
    };
    render(<MockComicItem comic={comic} />);
    expect(screen.getByTestId("add-btn")).toBeVisible();
  });

  test("If the comic is already in the list the add button should be changed so you can remove it", () => {});
});

describe("#Favorites-panel tests", () => {
  test("the favourites panel (#favourites-panel) should have the class open when clicked", () => {
    render(<MockApp />);
    const favoriteToggleBtn = screen.getByTestId("favourite-toggle");
    const favoritePanel = screen.getByTestId("favourites-panel");
    fireEvent.click(favoriteToggleBtn);
    expect(favoritePanel).toHaveClass("favourites-panel open");
  });

  test("There should be a list that displays all the favourites", () => {
    const favorites = [
      "Sentry, the (Trade Paperback)",
      "Ant-Man (2003) #4",
      "Marvel Previews (2017)",
      "Startling Stories: The Incorrigible Hulk (2004) #1",
    ];
    render(<MockFavorite favorites={favorites} />);
    const favLists = screen.getAllByTestId("fav-list");
    expect(favLists.length).toBe(4);
  });

  it("Should have comics within the favorites list with a remove button", async () => {
    const favorites = [
      "Sentry, the (Trade Paperback)",
      "Ant-Man (2003) #4",
      "Marvel Previews (2017)",
      "Startling Stories: The Incorrigible Hulk (2004) #1",
    ];
    render(<MockFavorite favorites={favorites} />);
    expect(screen.getAllByTestId("removeBtn").length).toBe(4);
  });
});
