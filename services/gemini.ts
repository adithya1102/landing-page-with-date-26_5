
const defaultChatPhrases = [
  'CareVo is an AI-powered restaurant OS built for clarity, speed, and seamless operations.',
  'Our system helps restaurants optimize staffing, orders, billing, and customer flow with an elegant minimal interface.',
  'Ask anything about operations, guest experience, or menu optimization and CareVo will respond in a concise, professional tone.',
];

export async function getChatResponse(prompt: string): Promise<string> {
  const normalized = prompt?.toLowerCase() ?? '';

  if (normalized.includes('feature') || normalized.includes('what can')) {
    return 'CareVo offers customer ordering, kitchen management, waiter co-pilot assistance, smart billing, and owner analytics in a clean, minimalist experience.';
  }

  if (normalized.includes('how') && normalized.includes('work')) {
    return 'CareVo works by connecting restaurant workflows into a single dashboard, using AI to recommend actions and speed service without clutter.';
  }

  if (normalized.includes('demo') || normalized.includes('trial')) {
    return 'This is a demo response from the offline CareVo assistant. It is fully self-hosted and does not require a Gemini API key.';
  }

  return defaultChatPhrases[Math.floor(Math.random() * defaultChatPhrases.length)];
}

export async function analyzeDish(_base64Image: string): Promise<string> {
  return 'This dish appears well-presented with fresh ingredients and balanced plating. Quality score: 8/10. The presentation feels modern and high-quality.';
}
