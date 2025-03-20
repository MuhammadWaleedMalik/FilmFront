import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useImage } from "../../hooks/useImage"; // Import the useImage hook

const colors = {
  primary: "#95c11e",
  secondary: "#95c11e",
  text: "white",
  bg: "linear-gradient(135deg, #465c0c, #4d750d)", 
  highlight: "#0051D4",
  border: "#003A91",
};

const AiBackgroundGen = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const { imageUrl, generateImage, loading, error } = useImage(); // Use the hook

  const handleGenerateBackground = async () => {
    if (!inputText) return;
    await generateImage(inputText); // Call the function from the hook
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "ai-generated-background.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center"
      style={{ backgroundColor: "black" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold" style={{ color: colors.primary }}>
          {t("AI Background Generator")}
        </h1>
        <p className="text-xl" style={{ color: colors.text }}>
          {t("Generate stunning AI-powered backgrounds")}
        </p>
      </motion.div>

      <div className="w-full max-w-8xl flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8 w-full border mb-8"
          style={{ backgroundColor: "transparent", borderColor: colors.primary }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            {t("How It Works")}
          </h2>
          <ul className="list-disc pl-5 mb-6" style={{ color: colors.text }}>
            <li>{t("Enter a description for your background image.")}</li>
            <li>{t("AI will generate a unique background based on your input.")}</li>
            <li>{t("Download and use the generated background.")}</li>
          </ul>
        </motion.div>

        <div
          className="rounded-xl p-8 border w-full"
          style={{ backgroundColor: "transparent", borderColor: colors.primary }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            {t("Generate AI Background")}
          </h2>
          <textarea
            rows={3}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
            style={{ backgroundColor: "transparent", borderColor: colors.primary, color: colors.text }}
            placeholder={t("Enter a description for your background...")}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>

          <button
            onClick={handleGenerateBackground}
            className="w-full mt-4 font-bold py-3 px-6 rounded-lg transition-all"
            style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}
            disabled={loading}
          >
            {loading ? t("Generating...") : t("Generate Background")}
          </button>

          {error && (
            <p className="text-red-500 mt-4">
              {t("Error:")} {error}
            </p>
          )}

          {imageUrl && (
            <div
              className="mt-6 p-4 rounded-lg border flex flex-col items-center"
              style={{ backgroundColor: "transparent", borderColor: colors.primary }}
            >
              <img src={imageUrl} alt="Generated Background" className="rounded-lg w-full" />

              <button
                onClick={handleDownload}
                className="mt-4 font-bold py-2 px-6 rounded-lg transition-all"
                style={{ backgroundColor: colors.highlight, color: "#FFFFFF" }}
              >
                {t("Download Image")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiBackgroundGen;
