# 🌍 Wandurlust — Full-Stack Travel Experience Web App

Welcome to **Wandurlust**, a full-stack travel listing web application that lets users explore, list, review, and save travel stays. Inspired by platforms such as Airbnb, this application incorporates dynamic image uploads, secure authentication, and an intuitive UI to deliver a modern travel experience.

---

## 🧠 1. About the Project

Wandurlust is built using a robust backend architecture and dynamic templating to provide a seamless experience for both hosts and travelers. Users can:

- 🔍 **Browse & search listings**  
- 🏡 **Create, edit, delete listings** (authenticated users only)  
- 💬 **Leave reviews for properties**  
- 📸 **Upload listing images using ImageKit / Cloud storage**  
- 🧭 **View listing locations with maps**  
- 📱 **Responsive UI for mobile & web**

This project uses **server-rendered EJS** templates and standard web routing to serve pages, while MongoDB serves as the data store.

📁 Main languages in the repo:
- EJS 38.9%
- JavaScript 33.4%
- CSS 27.7% 

### 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| Backend | Node.js, Express.js |
| Templating | EJS |
| Database | MongoDB (via Mongoose) |
| File Upload | ImageKit (uploadImage.js) |
| Containerization | Docker & Docker Compose |
| Cloud Hosting | Render (production) |

---

## 🚀 2. Deployment — Production (Live URL)

Wandurlust is **deployed and accessible globally via Render**:

📌 **Live URL (Replace with your actual link):**  
👉 https://wandurlust-cyu2.onrender.com/listings

Users can visit this link to:
✔ Browse listings  
✔ Login / register  
✔ Add and manage their own listings (after authentication)  
✔ View property details and reviews  

This production deployment handles:
- Node.js backend
- Environment variables securely stored in Render
- Connected to a MongoDB Atlas database

> *Note:* If deployment needs updating or environment changes, push your updates to GitHub and trigger a new deploy on Render.

---

## 🐳 3. Run Using Docker (Easy Local Setup)

i have published the application image on **Docker Hub**, so anyone can run it without building locally.

## 📥  Step 1: Pull the image from Docker Hub 

```bash
docker pull pratik180264/wandurlust:latest

```
## Step 2: Create Environment File 

This project requires environment variables.

A sample file is already provided:

.env.example

Create your own .env file from it:
```bash
cp .env.example .env
```
Open .env and fill your own values:

```bash
PORT=8080
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
```

## Step 3: Run the Container Using Docker 

After creating .env, run:
```bash
docker run -d -p 8080:8080 --env-file .env --name wandurlust_app pratik180264/wandurlust:latest
```
This will:
Start the container
Use your environment variables
Run the app on port 8080

## Step 4: Open in Browser 

Open:
```bash
http://localhost:8080/listings
```

## 🐳 Run Using docker-compose.yml (Recommended)

This repository includes a docker-compose.yml file.

Make sure your .env file is created.

Then run:

```bash
docker compose -f wandurlust.yaml up -d
```

To stop the application:
``` bash
docker compose -f wandurlust.yaml down
```

## 📜 License

This project is created for learning and educational purposes only.

You are free to use, modify, and study the code.


---
