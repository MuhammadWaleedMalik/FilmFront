import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = '67c96d35-07d5-41ee-b05b-36642110eea5'; // Replace with your actual DeepAI API key

export function useVideo() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const generateVideo = async (text) => {
    if (!text) return;

    // Check localStorage for token count
    const tokenCount = parseInt(localStorage.getItem('token') || '0', 10);
    if (tokenCount < 5) {
      navigate('/pricing');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.deepai.org/api/torch-srgan', {
        method: 'POST',
        headers: {
          'api-key': API_KEY,
        },
        body: new URLSearchParams({
          text,
        }),
      });

      const data = await response.json();
      console.log(data)

      if (data.output_url) {
        setVideoUrl(data.output_url);

        // Deduct credits if video generation is successful
        // Implement your removeCredits function as needed
        await removeCredits();
      } else {
        throw new Error('Failed to generate video');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { videoUrl, generateVideo, loading, error };
}
