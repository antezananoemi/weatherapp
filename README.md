# weatherapp

## Instalation Requirements

- Nodejs 10 or more

## Instalation

Follow the next steps:

### 1. Dependencies

After cloning the project, you need to run npm install on the source folder

```bash
cd /weatherapp
npm install
```

Also please npm install on the /client folder

```bash
cd /weatherapp/client
npm install
```

### 1.1 Prerequisites

You need to have a account of mapbox and rapid api, please do this to access your tokens to test the app
To get a token for the api go to this link https://rapidapi.com/community/api/open-weather-map
To get a token for the mapbox api go to this link https://www.mapbox.com/

### 2. Config variables

For the backend:

Please copy the config/default.json.cp file and renamed it to default.json

(DO NOT FORGET) Change the values on default.json file :

Add your Rapid Api token on RAPID_API_KEY value

Add you Map box token on MAPBOX_TOKEN value

\*\*\* Note: If you want to change the cache time you can do that on default.json file on interval variable "interval": "_/120 _ \* \* \*" 120 stands for 120 minutes by default

---

(DO NOT FORGET)
On client folder create a .env.local file
place this values:

REACT_APP_API_ENDPOINT="http://localhost:5000/api"

REACT_APP_MAPBOX_TOKEN="Your token here"

REACT_APP_MAPBOX_STYLE="mapbox://styles/nantezana/ck9r77ps00j3i1inng7ab0553"

REACT_APP_MIRAGEJS_ENABLE=false

\*\*\* Note: If you want to use only the frontend you can mock a server with mirageJs to do that change the REACT_APP_MIRAGEJS_ENABLE=true on .env.local

### 3.After installing dependencies

For Dev ENV

To be able to run backend only:

```bash
npm run server # on the source folder

```

To be able to Run both backend and frontend:

```bash
npm run dev # on the source folder, this will trigger both the backend and the client

```

To execute test

to execute test, on source folder npm run test

```bash
cd /weatherapp
npm run test # to test the backend in the source folder /
```
