# Recipes App

## Project Overview

The Recipes App is a RESTful API built using Node.js, Express.js, and MongoDB. It provides complete CRUD (Create, Read, Update, Delete) functionality for managing recipes. The project follows the MVC (Model-View-Controller) architecture and uses Mongoose for database operations.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

## Features

* Create a new recipe
* Retrieve all recipes
* Retrieve a recipe by ID
* Update a recipe by ID
* Delete a recipe by ID
* MongoDB integration using Mongoose
* MVC Architecture
* API Documentation using Postman

## Project Structure

```text
recipes-app/
│
├── controllers/
│   └── recipeController.js
│
├── models/
│   └── Recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── utils/
│   └── config.js
│
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone YOUR_GITHUB_URL
cd recipes-app
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Run the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

## API Endpoints

### 1. Create Recipe

**POST** `/api/v1/recipes`

Request Body:

```json
{
  "Title": "Pasta",
  "Ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
  "Instructions": "Boil pasta and mix with sauce."
}
```

Response:

```json
{
  "newRecipe": {
    "_id": "6865f57b6e5f2f7bc9c1d111",
    "Title": "Pasta",
    "Ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "Instructions": "Boil pasta and mix with sauce."
  }
}
```

---

### 2. Get All Recipes

**GET** `/api/v1/recipes`

Response:

```json
[
  {
    "_id": "6865f57b6e5f2f7bc9c1d111",
    "Title": "Pasta",
    "Ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "Instructions": "Boil pasta and mix with sauce."
  }
]
```

---

### 3. Get Recipe By ID

**GET** `/api/v1/recipes/:id`

Example:

```http
/api/v1/recipes/6865f57b6e5f2f7bc9c1d111
```

Response:

```json
{
  "_id": "6865f57b6e5f2f7bc9c1d111",
  "Title": "Pasta",
  "Ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
  "Instructions": "Boil pasta and mix with sauce."
}
```

---

### 4. Update Recipe

**PUT** `/api/v1/recipes/:id`

Request Body:

```json
{
  "Title": "Updated Pasta",
  "Ingredients": ["Pasta", "Cheese"],
  "Instructions": "Cook and serve."
}
```

Response:

```json
{
  "_id": "6865f57b6e5f2f7bc9c1d111",
  "Title": "Updated Pasta",
  "Ingredients": ["Pasta", "Cheese"],
  "Instructions": "Cook and serve."
}
```

---

### 5. Delete Recipe

**DELETE** `/api/v1/recipes/:id`

Response:

```json
{
  "message": "Recipe deleted successfully"
}
```

## Postman Documentation

Postman Collection:
https://documenter.getpostman.com/view/47652039/2sBXwpPXiK

The Postman documentation contains:

* Create Recipe API
* Get All Recipes API
* Get Recipe By ID API
* Update Recipe API
* Delete Recipe API
* Sample Requests
* Sample Responses




## Author

Tamoharini R

Mechatronics Engineering Student | Aspiring Full Stack Developer
