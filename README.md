# My E-Commerce App

## Overview

This is a Next.js-based e-commerce application that showcases a product catalog with different views, including a home page, product details page, and a review page. The project uses Tailwind CSS for styling and Material UI for UI components.

## Features

- **Home Page**: Displays a list of products with image, name, price, and description.
- **Product Page**: Shows detailed information about a selected product and allows the user to view more details.
- **Review Page**: Allows users to review their purchases and provides a summary of the products bought.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material UI**: React components for faster and easier web development.
- **React Context API**: For managing global state and handling view changes.

## Project Structure
my-ecommerce-app/
├── public/
│ ├── images/ # Product images
│ └── ... # Other static assets
├── src/
│ ├── components/ # Reusable React components
│ │ ├── Navbar.jsx # Navigation bar component
│ │ ├── ProductCard.jsx# Product card component
│ │ └── ... # Other components
│ ├── context/ # React Context providers
│ │ └── ViewContext.js # Context for managing view state
│ ├── pages/ # Next.js pages
│ │ ├── _app.js # Custom App component for global styles and context
│ │ ├── index.js # Home page
│ │ ├── product.js # Product details page
│ │ ├── review.js # Review page
│ │ └── ... # Other pages
│ ├── styles/ # CSS files
│ │ └── globals.css # Global styles (including Tailwind imports)
│ └── ... # Other project files
├── .gitignore # Git ignore file
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── package.json # Project dependencies and scripts
└── README.md # This README file