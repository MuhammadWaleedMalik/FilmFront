import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useImage } from '../../hooks/useImage';

const colors = {
  primary: "#95c11e",
  secondary: "#95c11e",
  text: "white",
  bg: "linear-gradient(135deg, #465c0c, #4d750d)",
  highlight: "#0051D4",
  border: "#003A91",
};

const AiCharacterGen = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const { imageUrl, generateImage, loading } = useImage();

  const handleGenerateCharacter = () => {
    const characterDetails = `${t('Generated Character')}: ${inputText}\n- ${t('Race')}: Elf\n- ${t('Class')}: Warrior\n- ${t('Abilities')}: Agility, Sword Mastery, Shadow Step`;
    setOutputText(characterDetails);
    generateImage(inputText);
  };

  const handleDownloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'generated_character.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-black w-full min-h-screen px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold" style={{ color: colors.primary }}>{t('AI Character Generator')}</h1>
        <p className="text-xl" style={{ color: colors.text }}>{t('Create unique characters with AI-powered generation!')}</p>
      </motion.div>

      <div className="w-full max-w-4xl flex flex-col items-start">
        <div className="rounded-xl p-8 border w-full mb-8" style={{ backgroundColor: 'transparent', borderColor: colors.primary }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>{t('Generate Your Character')}</h2>
          <textarea
            rows={5}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
            style={{ backgroundColor: 'transparent', borderColor: colors.primary, color: colors.text }}
            placeholder={t('Enter your character idea...')}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>

          <button
            onClick={handleGenerateCharacter}
            className="w-full mt-4 font-bold py-3 px-6 rounded-lg transition-all"
            style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}
          >
            {loading ? t('Generating...') : t('Generate Character')}
          </button>

          {outputText && (
            <div className="mt-6 p-4 rounded-lg border" style={{ backgroundColor: 'transparent', borderColor: colors.primary }}>
              <pre style={{ color: colors.text, whiteSpace: 'pre-wrap' }}>{outputText}</pre>
            </div>
          )}

          {imageUrl && (
            <div className="mt-6 text-center">
              <img src={imageUrl} alt="Generated Character" className="rounded-lg border" style={{ borderColor: colors.primary }} />
              <button
                onClick={handleDownloadImage}
                className="mt-4 font-bold py-2 px-6 rounded-lg transition-all"
                style={{ backgroundColor: colors.highlight, color: '#FFFFFF' }}
              >
                {t('Download Image')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiCharacterGen;