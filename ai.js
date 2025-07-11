import Groq from 'groq-sdk';
import { configDotenv as config } from 'dotenv';
config();

const groq = new Groq({ apiKey: process.env.apiKey });

export async function apiCall(prompt) {
  try {
    if (prompt.length === 0) return;

    return groq.chat.completions.create({
      messages: prompt,
      model: "gemma2-9b-it",
    });
  } catch (error) {
    return error;
  }

}