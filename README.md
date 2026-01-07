# Electronics Showcase - React & Tailwind CSS Project

A modern electronics product showcase built with React and Tailwind CSS v4.1, featuring a responsive design and dynamic product listing.

## 🚀 Features

- **Product Showcase** - Display electronics products with images, descriptions, and prices
- **API Integration** - Fetch product data from JSON Server
- **Loading & Error Handling** - User-friendly feedback during data fetching
- **Responsive Design** - Mobile-first approach with hamburger menu navigation
- **Routing** - Navigate between different pages seamlessly
- **Modern UI** - Clean interface with React Icons

## 🛠️ Tech Stack

- **React** 19.2.0
- **Tailwind CSS** v4.1.18
- **React Router DOM** v7.11.0
- **React Icons** v4.12.0
- **JSON Server** v1.0.0-beta.3
- **Vite** v7.2.4

## 📦 Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd tailwindcss-proj
```

2. Navigate to the project directory
```bash
cd tailwindcss
```

3. Install dependencies
```bash
npm install
```

4. Install Tailwind CSS v4.1 
```bash
npm install tailwindcss@4.1.18 @tailwindcss/vite@4.1.18
```

Follow the [official Tailwind CSS v4 documentation](https://tailwindcss.com/docs/installation) for configuration.

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
The app will run on `http://localhost:5173`

### JSON Server (API)
In a separate terminal, run:
```bash
npm run json-server
```
This will start the JSON server on `http://localhost:5000`

**Important:** Both servers must be running simultaneously for the app to work properly.

- App: http://localhost:5173
- API: http://localhost:5000

## 📁 Project Structure
tailwindcss-proj/
│
└── tailwindcss/                      # Main project directory
    │
    ├── node_modules/                 # Dependencies (auto-generated)
    │
    ├── public/                       # Static assets served directly
    │
    ├── src/                          # Source code
    │   │
    │   ├── assets/                   # Static assets (images, data)
    │   │   ├── data/
    │   │   │   └── productData.json  # Product data for JSON server
    │   │   ├── accer.png             # Product images
    │   │   ├── epsone10.png
    │   │   ├── hp.jpg
    │   │   ├── loading.gif           # Loading indicator
    │   │   ├── logo.jpg              # Brand logos
    │   │   ├── logo.png
    │   │   ├── logo.webp
    │   │   ├── pop4.jpg
    │   │   ├── tablet.jpg
    │   │   └── zte.png
    │   │
    │   ├── components/  
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Home.jsx 
    │   │   ├── Products.jsx
    │   │   └── UseFetch.jsx 
    │   │
    │   ├── App.css
    │   ├── 
    │   └── main.jsx 
    │
    ├── eslint.config.js          
    ├── package.json               
    ├── package-lock.json           
    ├── README.md         
    ├── index.html
    ├── tailwind.config.cjs  
    └── vite.config.js       



## Tech Stack

- React 19.2.0
- Tailwind CSS v4.1.18
- React Router DOM v7.11.0
- React Icons v4.12.0
- JSON Server v1.0.0-beta.3
- Vite v7.2.4


## Features Implemented

✅ Product showcase grid 
✅ API data fetching  
✅ Loading states  
✅ Error handling  
✅ Responsive hamburger menu  
✅ Multi-page routing  
✅ React Icons  

🤝 Contributing
Contributions, issues, and feature requests are welcome!

📄 License
This project is open source and available under the MIT License.

👨‍💻 Author
Hussien Yegoraw