import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const colors = {
  primary: "#D4A017",
  secondary: "white",
  text: "white",
  background: "black",
  highlight: "#0051D4",
  border: "#003A91",
};

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black mt-24 flex flex-col items-start justify-start px-12 pt-12">
      
      {/* About Us Title (Centered) */}
      <h1 className="text-6xl font-extrabold text-center w-full mb-10" style={{ color: colors.secondary }}>
        {t("About Us")}
      </h1>

      {/* Content Section (Left-aligned) */}
      <div className="w-full">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl max-w-6xl text-left"
          style={{ color: colors.text }}
        >
          {t(
            "Filmora is an AI-powered platform designed to revolutionize video content creation. Our advanced AI tools generate high-quality video clips, AI-driven images, lifelike characters, and natural voiceovers, making content creation seamless and efficient."
          )}
        </motion.p>

        {/* Features Section */}
        <div className="space-y-6 w-full mb-24 mt-6">
          {[
            { title: "AI-Generated Video Clips", description: "Create professional video clips with AI-driven content, effects, and transitions.", border: colors.primary },
            { title: "AI Image Generation", description: "Generate stunning AI-powered images for your videos and creative projects.", border: colors.secondary },
            { title: "AI-Generated Characters", description: "Design unique AI-generated characters with customizable features and animations.", border: colors.secondary },
            { title: "AI Voice Generation", description: "Convert text into natural AI-generated voiceovers for seamless narration.", border: colors.secondary },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 bg-transparent"
              style={{ borderColor: feature.border, color: colors.text }}
            >
              <h3 className="text-3xl font-bold">{t(feature.title)}</h3>
              <p className="text-lg">{t(feature.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
