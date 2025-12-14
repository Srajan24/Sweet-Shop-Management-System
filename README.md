# Sweet Shop Management System

A modern, full-stack e-commerce application for managing a sweet shop with a beautiful user interface and comprehensive admin functionality.

## Features

- 🛍️ **Product Catalog**: Browse and search through a wide variety of sweets
- 🛒 **Shopping Cart**: Add items to cart with quantity and weight selection
- 👤 **User Authentication**: Secure signup and login system
- 🎨 **Modern UI**: Beautiful, responsive design with light cream theme
- 🔐 **Admin Dashboard**: Manage inventory and products
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🌙 **Theme Toggle**: Light and dark mode support

## Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ritikkumar50/Sweet-Shop-Management-System.git
cd Sweet-Shop-Management-System
```

2. Install root dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
npm install
```

4. Install frontend dependencies
```bash
cd ../Sweet Shop
npm install
```

### Configuration

1. Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

2. Create a `.env` file in the `Sweet Shop` directory (optional):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd Sweet Shop
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
Sweet-Shop-Management-System/
├── backend/
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   └── app.js       # Express app setup
│   ├── tests/           # Test files
│   └── server.js        # Server entry point
│
└── Sweet Shop/
    ├── src/
    │   ├── api/         # API client configuration
    │   ├── assets/       # Static assets
    │   ├── components/   # React components
    │   ├── context/      # React context providers
    │   ├── data/         # Mock data
    │   ├── pages/        # Page components
    │   └── main.jsx      # React entry point
    └── public/           # Public assets
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/sweets` - Get all sweets
- `GET /api/sweets/:id` - Get a single sweet
- `POST /api/sweets` - Create a new sweet (Admin only)
- `PUT /api/sweets/:id` - Update a sweet (Admin only)
- `DELETE /api/sweets/:id` - Delete a sweet (Admin only)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Srajan

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
