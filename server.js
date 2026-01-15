import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post("/api/disaster", async (req, res) => {
  const userMessage = req.body.message;

  const prompt = `
Classify this user emergency message into:
- Flood
- Fire
- Earthquake
- Unknown

Return JSON only like this format:
{"disaster":"Fire","steps":["step1", "step2"],"numbers":{"police":"100","ambulance":"108","emergency":"112"}}

Message: "${userMessage}"
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-4o-mini", // recommended cheap + powerful
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://render.com",
          "X-Title": "DisasterHelpAI"
        }
      }
    );

    const text = response.data.choices[0].message.content.trim();
    const json = JSON.parse(text);

    res.json(json);

  } catch (error) {
    console.error(error.response?.data || error);

    // fallback response
    res.json({
      disaster: "unknown",
      steps: ["Contact emergency services immediately"],
      numbers: {
        police: "100",
        ambulance: "108",
        emergency: "112"
      }
    });
  }
});

// Required for Render
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
