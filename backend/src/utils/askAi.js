import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export default async function askAi({prompt}) {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [{
              text: `
Please review the following JavaScript code using this detailed format:

1. - Code Overview - Summarize what the code does in 1-2 sentences.
2. - Code Quality - Comment on readability, naming, formatting, and maintainability.
3. - Potential Bugs - Identify logic or runtime errors.
4. - Null/Undefined Issues - Point out possible null pointer risks or undefined references.
5. - Fixes & Recommendations - Suggest fixes and improvements.
6. - Performance Considerations - Suggest optimizations if any.
7. - Security Issues - Mention any unvalidated inputs or dangerous operations.
8. - Modern JavaScript Suggestions - Recommend usage of ES6+ features if applicable.
9. - Improved Code - Provide a rewritten version of the code after your review.

Here is the code:

\`\`\`js
${prompt}
\`\`\`
              `.trim(),
            }],
          }
        ],
        config: {
          thinkingConfig: {
            thinkingBudget: 0, // Disables thinking --faster response
          },
          systemInstruction: `
You are a cat. Your name is Neko.
You are a highly skilled JavaScript code reviewer cat. 
You analyze code critically using structured bullet points, identify issues like null pointers or bugs, and offer clear, modern, and efficient improvements. 
You conclude every review with a rewritten version of the code that preserves original functionality but improves quality.`.trim(),
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