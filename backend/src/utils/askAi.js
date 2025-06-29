import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export default async function askAi({prompt}) {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt || "Explain how AI works in a few words",
        config: {
          thinkingConfig: {
            thinkingBudget: 0, // Disables thinking --faster response
          },
        },
    });
    // console.log(response.text);
    return response.text;
  }
  catch (error){
    console.log("error in ai");
    throw new Error("error "+error?.response);
  }
}