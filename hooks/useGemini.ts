import { useCallback, useState } from 'react';
import { analyzeDish, getChatResponse } from '../services/gemini';

export interface UseGeminiResult {
  loading: boolean;
  error: string | null;
  lastResponse: string;
  requestChat: (prompt: string) => Promise<string>;
  analyzeDishImage: (base64Image: string) => Promise<string>;
  clearError: () => void;
}

export function useGemini(): UseGeminiResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastResponse, setLastResponse] = useState('');

  const requestChat = useCallback(async (prompt: string) => {
    setError(null);
    setLoading(true);

    try {
      const text = await getChatResponse(prompt);
      setLastResponse(text);
      return text;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to generate a response.';
      setError(message);
      return '';
    } finally {
      setLoading(false);
    }
  }, []);

  const analyzeDishImage = useCallback(async (base64Image: string) => {
    setError(null);
    setLoading(true);

    try {
      const text = await analyzeDish(base64Image);
      setLastResponse(text);
      return text;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to analyze the image.';
      setError(message);
      return '';
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    lastResponse,
    requestChat,
    analyzeDishImage,
    clearError: () => setError(null),
  };
}
