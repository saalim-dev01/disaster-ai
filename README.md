# 🛡️ Disaster Help AI — BY SAALIM MASROOR

Disaster Help AI is a lightweight emergency assistance tool that detects disasters from short user messages, provides immediate safety instructions, and shows essential emergency contact numbers.

Built as an MVP for hackathons, research prototypes, and emergency tech demonstrations.

---

## 🚀 Key Features

- 🧠 **AI-based Disaster Classification**
  - Flood
  - Fire
  - Earthquake
  - Unknown (fallback)
  
- 💡 **Simple UI**
  - Glassmorphism UI
  - Mobile-friendly
  - Fast & responsive

- 🆘 **Immediate Safety Instructions**
  - Actionable steps based on detected disaster

- 📞 **Emergency Numbers**
  - Police (100)
  - Ambulance (108)
  - Emergency (112)

- 🔁 **Fallback Mechanism**
  - Local classification logic runs if API is unavailable

---

## 🧱 Tech Stack

### **Frontend**
- HTML
- CSS (Glassmorphism UI)
- JavaScript (Fetch + DOM)

### **Backend (Optional AI Mode)**
- Node.js + Express
- OpenRouter API *(or Gemini Free API)*

---

## 🌍 Live Demo (Optional)
*(Add later if deployed)*  
https://yourusername.github.io/DisasterHelpAI/

yaml
Copy code

---

## 📷 Screenshots (Optional)
*(Add UI screenshots here)*

/screenshots/home.png
/screenshots/output.png

yaml
Copy code

---

## 🧠 How It Works (Architecture)

```mermaid
flowchart TD
    A[User Input] --> B[Frontend]
    B --> C[AI Backend (OpenRouter/Gemini)]
    C --> D[JSON Response]
    D --> E[UI Rendering]
    B -->|Fallback| F[Local Detection Logic]
📝 Example Input → Output
Input:

"Water is entering my house"

AI Output:

json
Copy code
{
  "disaster": "Flood",
  "steps": [
    "Turn off electricity",
    "Move to higher ground",
    "Avoid walking in moving water"
  ],
  "numbers": {
    "police": "100",
    "ambulance": "108",
    "emergency": "112"
  }
}
🛠 Installation
Clone Repo
sh
Copy code
git clone https://github.com/<your-username>/DisasterHelpAI.git
cd DisasterHelpAI
🧩 Running the Frontend (Local)
Just open:

diff
Copy code
index.html
No build required.

🧩 Running the Backend (Optional AI Mode)
1. Install dependencies
sh
Copy code
npm install express cors axios
2. Create .env
ini
Copy code
OPENROUTER_API_KEY=your_api_key_here
3. Run server
sh
Copy code
node server.js
Server will run on:

arduino
Copy code
http://localhost:4000
🔗 API Endpoint (Backend Mode)
POST /api/disaster
Body:
json
Copy code
{ "message": "The ground is shaking" }
Success Response:
json
Copy code
{
  "disaster": "Earthquake",
  "steps": [...],
  "numbers": {...}
}
🧪 Local Fallback Logic
If AI API fails or is disabled, local logic detects via keywords:

js
Copy code
flood: ["water","flood","overflow"]
fire: ["fire","burning","smoke"]
earthquake: ["earthquake","shake","tremor"]
🌎 Deployment Options
✔ GitHub Pages (Frontend)

✔ Vercel / Render (Backend)

✔ Railway / Heroku (Backend)

🧩 Roadmap (Future Enhancements)
🔊 Speech-to-text input

🌐 Multi-language support (Hindi, Urdu, English)

📍 GPS-based nearest emergency services

🚨 Real-time alerting system

🗺️ Disaster map visualization

📦 Offline PWA mode

🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

🛡 License
This project is licensed under the MIT License.

🙌 Credits
Built with ❤️ for innovation, safety by SAALIM MASROOR 
