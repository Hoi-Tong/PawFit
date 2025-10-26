# 🐶🐱 PawFit

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-4.4.9-blueviolet?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A fun and interactive web app built with **React + Vite** that generates **random outfits for pets**.  
Users can choose between a **Dog** or **Cat**, and the app displays a random combination of **shirt, pants, and shoes** for the pet.

---

## 🚀 Features

- Choose between **Dog** or **Cat**
- Randomized pet outfits every time
- Uses live images from APIs for pets and clothing
- Responsive and simple design
- Quick and fun way to see pets in cute outfits

---

## 🛠️ Tech Stack

- **React** (Functional Components)  
- **Vite** for fast development and hot reload  
- **Unsplash API** for clothing images  
- **Dog CEO API** and **The Cat API** for pet images  
- **CSS** for styling  

---

## 💾 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/pet-outfit-generator.git
cd pet-outfit-generator
Install dependencies

bash
Copy code
npm install
Create a .env file in the root folder

bash
Copy code
VITE_UNSPLASH_KEY=YOUR_UNSPLASH_ACCESS_KEY
⚠️ Make sure the variable starts with VITE_.

Start the development server

bash
Copy code
npm run dev
Open the URL printed in your terminal (usually http://localhost:5173) to see the app.

📁 Project Structure
bash
Copy code
my-react-app/
│
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env               # Contains Unsplash API key
├── package.json
└── README.md
🔧 Possible Enhancements
Add more outfit categories (hats, scarves, accessories)

Save favorite outfits

Use multiple APIs for more variety

Layer outfits visually on the pet image for a realistic look
