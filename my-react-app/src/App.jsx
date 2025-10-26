import React, { useEffect, useState } from 'react';

import './App.css'

function App() {
  const [petImage, setPetImage] = useState("");
  const [shirt, setShirt] = useState("");
  const [pants, setPants] = useState("");
  const [shoes, setShoes] = useState("");
  const [loading, setLoading] = useState(false);

  const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

  async function fetchRandomOutfit(petType) {
    setLoading(true);
    setPetImage("");
    setShirt("");
    setPants("");
    setShoes("");

    try {
      // Step 1: Randomly choose pet
      let petImageUrl = "";
      if (petType === "dog") {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        petImageUrl = data.message;
      } else {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        petImageUrl = data[0].url;
      }

      setPetImage(petImageUrl);

      // Step 3: Fetch random clothing items from Unsplash
      const fetchFromUnsplash = async (query) => {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${query}&orientation=squarish&client_id=${UNSPLASH_KEY}`
        );
        const data = await res.json();
        return data.urls.small;
      };

      const shirtQuery =
        petType === "dog"
          ? "baby shirt without face"
          : "baby shirt without face";
      const pantsQuery =
        petType === "dog"
          ? "baby pants without face"
          : "baby pants without face";
      const shoesQuery =
        petType === "dog"
          ? "baby shoes without face"
          : "baby shoes without face";

      const [shirtImg, pantsImg, shoesImg] = await Promise.all([
        fetchFromUnsplash(shirtQuery),
        fetchFromUnsplash(pantsQuery),
        fetchFromUnsplash(shoesQuery),
      ]);

      setShirt(shirtImg);
      setPants(pantsImg);
      setShoes(shoesImg);
    } catch (error) {
      console.error("Error fetching outfit:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>🐾 PawFit 🐾</h1>
      <div className="buttons">
        <button onClick={() => fetchRandomOutfit("dog")} disabled={loading}>
          🐶 {loading ? "Loading..." : "Generate Dog Outfit"}
        </button>
        <button onClick={() => fetchRandomOutfit("cat")} disabled={loading}>
          🐱 {loading ? "Loading..." : "Generate Cat Outfit"}
        </button>
      </div>

      {petImage && (
        <div className="images">
          <h2>Look at this stylish pet!</h2>
          <img src={petImage} alt="Pet" className="pet" />
          <div className="outfit">
            <img src={shirt} alt="shirt" />
            <img src={pants} alt="pants" />
            <img src={shoes} alt="shoes" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;