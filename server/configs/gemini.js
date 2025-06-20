
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateGeminiResponse(prompt) {
  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate content.";
  }
}

export default generateGeminiResponse;