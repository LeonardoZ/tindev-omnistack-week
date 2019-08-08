# Tindev Backend - Omnistack Week

Backend for the Tindev project. Written in Node.JS, uses MongoDB as data storage.

## Getting Started

Rename **.env.example** to **.env** and configure the required environment variables. The project won't work if you don't do this.

## Scripts

For development, use **yarn dev**. It'll use nodemon for autoreload. FOr anything else, use **node app/server.js**.

## API

## Get Devs

Returns all devs that aren't liked or disliked yet by the logged user.

- **URI**: /devs
- **METHOD**: GET
- **HEADERS**: user : logged user id
- **STATUS**: 200

## Save Dev

Save dev from Github username into the system if isn't already saved, returning the dev information.

- **URI**: /devs
- **METHOD**: POST
- **BODY**: { username: "xxx" } 
- **STATUS**: 200

## Like Dev

Like another dev for the logged user.

- **URI**: /devs/:devId/likes - :devId: id of the dev to be liked.
- **METHOD**: POST
- **HEADERS**: user : logged user id 
- **STATUS**: 200 | 400 (if path does not exist)

## Like Dev

Like another dev for the logged user.

- **URI**: /devs/:devId/dislikes - :devId: id of the dev to be liked.
- **METHOD**: POST
- **HEADERS**: user : logged user id 
- **STATUS**: 200 | 400 (if path does not exist)