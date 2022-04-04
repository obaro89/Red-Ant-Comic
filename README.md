
# Red Ant Comic

This is a REACT Application that displays a listing of comics, it also allows you to add to a favourite list.
It consumes the Marvel API.


## Run Locally

Clone the project

```bash
  https://github.com/obaro89/Red-Ant-Comic.git
```

Go to the project directory

```bash
  cd Red-Ant-Comic
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests for basic requirement, run the following command

```bash
  npm run test
```


##Tools and Tech Stack

**Client:** React, Redux, react-toastify
**API**: Marvel Comic API, Axios



## Config Variables

To run this project, you will need to create and add the following variables to your config.json file

`apiEndPoint`

`apiKey`


## Example of the config file

```json
{
  "apiEndPoint": "https://gateway.marvel.com/v1/public/comics?",
  "apiKey": "apikey=YOUR_API_KEY&ts=YOUR_ts&hash=YOUR_HASH"
}
```

