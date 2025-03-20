import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const colors = {
  primary: "#00D4FF",
  secondary: "#00A6FB",
  text: "#FFFFFF",
  bg: "linear-gradient(135deg, #001F3F, #003F7F)",
  highlight: "#FFD700",
  border: "#007BFF",
};

const AiThemeGen = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEnhanceContent = () => {
    setOutputText(`${t('Enhanced Content')}: ${inputText}`);
  };

  return (
    <div className="w-full min-h-screen px-6 sm:px-8 lg:px-10 py-24 flex flex-col items-center" style={{ background: colors.bg }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold" style={{ color: colors.primary }}>{t('AI Theme Generator')}</h1>
        <p className="text-lg mt-2" style={{ color: colors.text }}>{t('Enhance Your Content with AI-Powered Suggestions')}</p>
      </motion.div>

      <div className="w-full max-w-5xl flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl p-6 border w-full mb-8 shadow-lg"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: colors.border }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>{t('How to Use')}</h2>
          <ul className="list-disc pl-5" style={{ color: colors.text }}>
            <li>{t('Paste your text to receive AI-powered enhancements.')}</li>
            <li>{t('Improve clarity, tone, and engagement with AI suggestions.')}</li>
            <li>{t('Make your content more compelling and professional.')}</li>
            <li>{t('Apply the enhanced content for better presentations.')}</li>
          </ul>
        </motion.div>

        <div className="rounded-xl p-6 border w-full shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: colors.border }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>{t('AI Content Enhancer')}</h2>
          <textarea
            rows={5}
            className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: colors.border, color: colors.text }}
            placeholder={t('Paste your text here...')}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>

          <button
            onClick={handleEnhanceContent}
            className="w-full mt-4 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            style={{ backgroundColor: colors.primary, color: '#000' }}
          >
            {t('Enhance Content')}
          </button>

          {outputText && (
            <div className="mt-6 p-4 rounded-lg border" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: colors.border }}>
              <p style={{ color: colors.text }}>{outputText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiThemeGen;
