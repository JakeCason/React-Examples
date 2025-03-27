# React Router with State Sharing Example

This example demonstrates how to use React Router with state management to share data between different pages. It builds on example6 and incorporates state management concepts from examples 4 and 5.

## Features

- Basic page navigation with `/`, `/about`, and `/products` routes
- Nested routes with product details
- URL parameters with `:productId`
- 404 page handling
- **State sharing between components:**
  - User name input shared across all pages
  - Product selection shared across all pages
  - Example of how to use React Context for global state

## Running the example

```
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Key Concepts

- Context API for global state management
- Sharing data between separate routes
- Conditional rendering based on state
- Form inputs and state updates
- React Router concepts:
  - BrowserRouter - Main router component
  - Routes/Route - Define application routes
  - NavLink - Navigation with active state
  - Outlet - Render child routes
  - useParams - Access URL parameters
  - useNavigate - Programmatic navigation 