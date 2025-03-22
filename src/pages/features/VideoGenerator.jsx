import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useVideo from "../../hooks/useVideo";

export default function VideoGenerator() {
  const { videoUrl, loading, error, generateVideo } = useVideo();
  const [prompt, setPrompt] = useState("");
  const [finalVideoUrl, setFinalVideoUrl] = useState("");
  const navigate = useNavigate();

  // Check if credits are less than 15 and redirect
  useEffect(() => {
    const credits = parseInt(localStorage.getItem("credits"), 10) || 0;
    if (credits < 15) {
      navigate("/pricing");
    }
  }, [navigate]);

  useEffect(() => {
    if (videoUrl) {
      console.log("✅ Video URL received:", videoUrl);
      setFinalVideoUrl(videoUrl);
    }
  }, [videoUrl]);

  const downloadVideo = () => {
    if (!finalVideoUrl) return;

    const link = document.createElement("a");
    link.href = finalVideoUrl;
    link.download = "generated-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-32 text-white flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-4xl w-full bg-gray-800 p-8 mt-6 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-indigo-400">AI Video Generator</h1>
        <p className="text-gray-300 mt-2">Generate stunning AI-powered videos instantly.</p>

        <ul className="text-gray-400 text-left mt-4 space-y-2">
          <li>📝 <strong>Describe</strong> the scene with a <strong>detailed prompt</strong>.</li>
          <li>🎬 <strong>Click Generate</strong> to create an AI-powered video.</li>
          <li>⬇️ <strong>Download</strong> and share your masterpiece.</li>
        </ul>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl w-full bg-gray-800 p-8 mt-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-indigo-400">🎬 Enter Your Prompt</h2>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the scene..."
          className="mt-4 w-full h-32 p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={() => generateVideo(prompt)}
          className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold transition-all"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>

        {error && <p className="text-red-400 mt-4">❌ {error}</p>}
      </div>

      {/* Video Display Section */}
      {finalVideoUrl && (
        <div className="max-w-4xl w-full bg-gray-800 p-8 mt-6 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-400">🎥 Your Generated Video</h2>
          <video key={finalVideoUrl} className="w-full rounded-lg mt-4" controls>
            <source src={finalVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={downloadVideo}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition-all"
          >
            Download Video
          </button>
        </div>
      )}
    </div>
  );
}
