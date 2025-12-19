
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private getAI() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(prompt: string) {
    try {
      const ai = this.getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are the CareVo AI Restaurant Consultant. 
          CareVo is an AI-powered Restaurant Operating System that increases revenue by 25%.
          Features: Customer App, Waiter AI Co-Pilot, Kitchen Management, Smart Billing, and Owner Dashboard.
          Tone: Minimalist, professional, helpful, "Nothing Phone" inspired. 
          Keep answers concise. If asked about technical specs, mention IoT sensors and Deep Learning.`
        }
      });
      return response.text || "I'm having trouble connecting to the system.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred. Please check your connection.";
    }
  }

  async analyzeDish(base64Image: string) {
    try {
      const ai = this.getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Image.split(',')[1],
              },
            },
            {
              text: "Act as an AI Executive Chef. Analyze this dish. Rate its presentation, identify the components, and provide a 'Quality Score' out of 10. Be brief but professional.",
            },
          ],
        },
      });
      return response.text || "Unable to analyze the image.";
    } catch (error) {
      console.error("Vision Error:", error);
      return "Vision analysis failed.";
    }
  }
}

export const gemini = new GeminiService();
