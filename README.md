# Mica Backend - Node.js API with CRUD Operations

This project is a simple Node.js API using Express that implements CRUD (Create, Read, Update, Delete) operations on items. The API uses in-memory data storage, making it easy to get started without a database. You can test all endpoints using Postman or any other API client.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [Postman](https://www.postman.com/) or any other API testing tool

## Installation

1. **Clone the repository** or download the project files:

    ```bash
    git clone <repository-url>
    cd mica-backend
    ```

2. **Install the required dependencies**:

    ```bash
    npm install
    ```

## Running the Server

1. **Start the server** using the following command:

    ```bash
    node index.js
    ```

2. The server will run on `http://localhost:5000`.

    You should see the following message in your terminal:

    ```bash
    Server running on port 5000
    ```

## API Endpoints

Below are the endpoints that you can test using Postman:

### 1. Get All Items

- **URL:** `GET /api/items`
- **Description:** Fetches all items.
- **Example Response:**
  
    ```json
    [
      {
        "id": 1,
        "name": "Item 1",
        "description": "This is the first item."
      }
    ]
    ```

### 2. Get Single Item by ID

- **URL:** `GET /api/items/:id`
- **Description:** Fetch a single item by its ID.
- **Example Request:**

    `GET /api/items/1`

- **Example Response:**
  
    ```json
    {
      "id": 1,
      "name": "Item 1",
      "description": "This is the first item."
    }
    ```

### 3. Create a New Item

- **URL:** `POST /api/items`
- **Description:** Creates a new item.
- **Request Body:**

    ```json
    {
      "name": "Item 1",
      "description": "This is the first item."
    }
    ```

- **Example Response:**

    ```json
    {
      "id": 1,
      "name": "Item 1",
      "description": "This is the first item."
    }
    ```

### 4. Update an Item by ID

- **URL:** `PUT /api/items/:id`
- **Description:** Updates an existing item.
- **Request Body (partial or full update):**

    ```json
    {
      "name": "Updated Item",
      "description": "Updated description"
    }
    ```

- **Example Request:**

    `PUT /api/items/1`

- **Example Response:**

    ```json
    {
      "id": 1,
      "name": "Updated Item",
      "description": "Updated description"
    }
    ```

### 5. Delete an Item by ID

- **URL:** `DELETE /api/items/:id`
- **Description:** Deletes an item by its ID.
- **Example Request:**

    `DELETE /api/items/1`

- **Response:** Status `204 No Content`

## Testing with Postman

Here’s how you can test the API endpoints with Postman:

1. **Open Postman**.
2. **Create a new request** for each endpoint:
    - Set the appropriate method (GET, POST, PUT, DELETE).
    - Enter the URL (e.g., `http://localhost:5000/api/items`).
    - For POST and PUT requests, set the **Body** to **raw** and choose **JSON** as the format, then enter the request payload.
3. **Send the request** and inspect the response in Postman.

## Project Structure

```bash
mica-backend/
├── controllers/          # Contains route handler logic
│   └── itemController.js
├── routes/               # Contains API route definitions
│   └── itemRoutes.js
├── index.js              # Main server file
├── package.json          # Project metadata and dependencies
└── README.md             # This file
