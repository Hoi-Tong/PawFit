🐶🐱 Pet Random Outfit Generator (Technical Version)

A React + Vite web application that dynamically generates random pet outfits using live images fetched from APIs.
The app supports both dog and cat pets, fetching random clothing images (shirts, pants, shoes) and displaying them on the page.

🛠️ Tech Stack
Category	Technologies / Libraries
Frontend	React (Functional Components)
State	React Hooks (useState, useEffect)
API	Unsplash API for outfit images, Dog CEO API for dog images, The Cat API for cat images
Build Tool	Vite
Styling	CSS
⚙️ Features (Technical)

Dynamic pet selection: Users can choose Dog or Cat.

Asynchronous API calls: Uses fetch and Promise.all to retrieve multiple outfit images simultaneously.

State management: React useState is used to store the URLs of the pet image and clothing images.

Randomized outfits: Unsplash “random photo” endpoints with query terms tailored for pets.

Conditional rendering: Images are only displayed after the API responses are loaded.

Loading state: Button is disabled while requests are in progress to prevent multiple concurrent fetches.

🧩 Implementation Details
1️⃣ State Variables
const [petImage, setPetImage] = useState("");
const [shirt, setShirt] = useState("");
const [pants, setPants] = useState("");
const [shoes, setShoes] = useState("");
const [loading, setLoading] = useState(false);


petImage → stores the fetched dog or cat image URL

shirt, pants, shoes → store outfit part image URLs

loading → boolean flag to prevent multiple API calls

2️⃣ Pet Image Fetching
if (petType === "dog") {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  petImageUrl = data.message;
} else {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  petImageUrl = data[0].url;
}


Uses Dog CEO API for random dogs

Uses The Cat API for random cats

3️⃣ Outfit Image Fetching (Unsplash API)
const fetchFromUnsplash = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&orientation=squarish&client_id=${UNSPLASH_KEY}`
  );
  const data = await res.json();
  return data.urls.small;
};

const [shirtImg, pantsImg, shoesImg] = await Promise.all([
  fetchFromUnsplash(shirtQuery),
  fetchFromUnsplash(pantsQuery),
  fetchFromUnsplash(shoesQuery),
]);


Query terms are dynamically set based on petType:

const shirtQuery = petType === "dog" ? "dog shirt OR dog clothes" : "cat shirt OR cat outfit";
const pantsQuery = petType === "dog" ? "dog pants OR dog costume" : "cat pants OR cat costume";
const shoesQuery = petType === "dog" ? "dog shoes OR dog boots" : "cat shoes OR cat socks";


Promise.all fetches all images concurrently for performance.

4️⃣ Event Handling
<button onClick={() => fetchRandomOutfit("dog")}>Generate Dog Outfit</button>
<button onClick={() => fetchRandomOutfit("cat")}>Generate Cat Outfit</button>


Clicking a button triggers the fetchRandomOutfit() function with the selected petType.

5️⃣ Conditional Rendering
{petImage && (
  <div className="images">
    <img src={petImage} alt="Pet" className="pet" />
    <div className="outfit">
      {shirt && <img src={shirt} alt="shirt" />}
      {pants && <img src={pants} alt="pants" />}
      {shoes && <img src={shoes} alt="shoes" />}
    </div>
  </div>
)}


Ensures no broken images are rendered before API responses.

💾 Setup Instructions

Clone the repo:

git clone https://github.com/your-username/pet-outfit-generator.git
cd pet-outfit-generator


Install dependencies:

npm install


Create .env in project root:

VITE_UNSPLASH_KEY=YOUR_UNSPLASH_ACCESS_KEY


Run dev server:

npm run dev

🔧 Possible Enhancements

Replace Unsplash with Pixabay API for more relevant pet clothing images.

Add layered rendering so clothing overlaps the pet image naturally.

Introduce categories like hats, scarves, costumes.

Cache images locally to reduce API calls and speed up loading.
