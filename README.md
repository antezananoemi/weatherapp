# weatherapp
## Instalation Requirements

- Nodejs 8 or more

## Instalation

Follow the next steps:

### 1. Dependencies
After cloning the project, you need to run npm i on the source folder and on the /client folder
Please copy the config/default.json.cp file and renamed it to default.json
Add your Rapid Api token on RAPID_API_KEY value
```bash
npm install
```
After installing dependencies

For Dev ENV

To be able to run backend only:

```bash
npm run server # on the source folder

```


To be able to Run both backend and frontend:

```bash
npm run dev # on the source folder, this will trigger both the backend and the client

```

For Production

To mock a production server, you can follow the next steps:

```bash
npm install -g serve
serve -l 3000 -s build # to serve the frontend on the /client folder
npm run server # to serve the backend in the source folder /
```
