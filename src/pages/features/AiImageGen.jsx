import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useImage } from "../../hooks/useImage";

const colors = {
  primary: "#95c11e",
  secondary: "#95c11e",
  text: "white",
  bg: "linear-gradient(135deg, #465c0c, #4d750d)",
  highlight: "#0051D4",
  border: "#003A91",
};

const AiImageGen = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const { imageUrl, generateImage, loading, error } = useImage();

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "generated-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-black w-full mx-auto mt-48 mb-48 px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold" style={{ color: colors.primary }}>
          {t("AI Image Generator")}
        </h1>
        <p className="text-xl" style={{ color: colors.text }}>
          {t("Generate stunning AI images from text!")}
        </p>
      </motion.div>

      <div className="rounded-xl p-8 border" style={{ borderColor: colors.primary }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
          {t("Enter a Prompt")}
        </h2>
        <textarea
          rows={3}
          className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 border"
          style={{ backgroundColor: "transparent", color: colors.text }}
          placeholder={t("Describe the image you want to generate...")}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button
          onClick={() => generateImage(inputText)}
          className="w-full mt-4 font-bold py-3 px-6 rounded-lg transition-all"
          style={{ backgroundColor: colors.primary, color: colors.text }}
          disabled={loading}
        >
          {loading ? t("Generating...") : t("Generate Image")}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {imageUrl && (
          <div className="mt-6 p-4 rounded-lg border flex flex-col items-center" style={{ borderColor: colors.primary }}>
            <img src={imageUrl} alt="Generated AI" className="rounded-lg" />
            <button
              onClick={handleDownload}
              className="mt-4 py-2 px-6 rounded-lg font-bold transition-all"
              style={{ backgroundColor: colors.highlight, color: colors.text }}
            >
              {t("Download Image")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiImageGen;