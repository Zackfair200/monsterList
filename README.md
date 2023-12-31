# Monster Management App

Welcome to the Monster Management App, a Node.js application built with the NestJS framework.

![Static Badge](https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Static Badge](https://img.shields.io/badge/NodeJS-E0234E?style=for-the-badge&logo=NestJs&logoColor=white)
![Static Badge](https://img.shields.io/badge/NodeJS-47A248?style=for-the-badge&logo=MongoDb&logoColor=white)


## Overview

The Monster-List App allows users to view a list of monsters that Bored Mike is adding to the collection. Bored Mike has full permissions to perform all CRUD operations on monsters. To access the full CRUD functionality, users need to include a specific header in their requests. Add a header with key `Authorization` and value `Basic imMike` to access private endpoints protected by a guard.

In addition to basic CRUD operations, the application includes two extra features for managing monster gold: adding and removing gold. These functionalities are separated from the standard CRUD operations and are part of a dedicated CRUD for handling gold.

[![Static Badge](https://img.shields.io/badge/Monster_APP-blue?style=for-the-badge)](https://monster-list-deploy.onrender.com/api)

## Getting Started

To use the application, follow these steps:

1. Clone the repository:
  ```bash
   git clone https://github.com/Zackfair200/monsterList
  ```
2. Manage Node.js version:
  `cd monster-management-app`
  `nvm use`

3. Install dependencies:
  `npm install`

4. Set up the database (only to run at localhost):
  `Create a database named monsterdb.`

5. Run the application:
  `npm start`

## Endpoints from Api deployed at Render

`Monsters`
  Get All Monsters:

  GET: https://monster-list-deploy.onrender.com/monsters

  Get One Monster:

  GET: https://monster-list-deploy.onrender.com/monsters/:id

  Create Monster:

  POST: https://monster-list-deploy.onrender.com/monsters

  ```
  Body: {
    "firstName": "name",
    "lastName": "lastName",
    "title": "tittle",
    "gender": "female,male or other",
    "description": "description",
    "nationality": ["ES","US","PT","FR"...],
    "image": "URL",
    "goldBalance": 100,
    "speed": 5.2,
    "health": 105,
    "secretNotes": "secretNote",
    "monsterPassword": "yourMonsterPassword"
  }
  ```

  Update Monster:

  PATCH: https://monster-list-deploy.onrender.com/monsters/:id

  Delete Monster:

  DELETE: https://monster-list-deploy.onrender.com/monsters/:id

`GOLD`
  Add Gold to Monster:

  PATCH: https://monster-list-deploy.onrender.com/gold/:id/add-gold
  ```
  Body: { "amount": 10 }
  ```

  Remove Gold from Monster:

  PATCH: https://monster-list-deploy.onrender.com/gold/:id/remove-gold
  ```
  Body: { "amount": 5 }
  ```

# Personal Notes

I have added a swagger to facilitate calls to the backend, you can find the swagger by adding /api to the end of the path.
https://monster-list-deploy.onrender.com/api (example)

# Personal Notes

I thoroughly enjoyed working on this technical test. Despite facing challenges during the creation of the guard, I successfully overcame them with valuable assistance from the NestJS documentation.
