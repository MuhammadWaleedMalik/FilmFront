import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  const colors = {
    primary: "#D4A017",
    secondary: "#D4A017",
    text: "white",
    bg: "black",
    highlight: "#0051D4",
    border: "#003A91",
  };

  return (
    <div className="min-h-screen bg-black mt-24 text-left px-12 py-16 flex items-start justify-start w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all bg-transparent"
      >
        {/* Title Centered */}
        <h1
          className="text-6xl font-extrabold text-center mb-12"
          style={{ color: colors.primary }}
        >
          {t("Terms & Conditions")}
        </h1>

        {/* Terms List */}
        <div className="space-y-8 w-full">
          {[
            {
              title: t("1. Acceptance of Terms"),
              description: t(
                "By accessing or using Filmora, you acknowledge and agree to abide by our terms. Your continued use of our AI-powered platform signifies acceptance of these terms. We reserve the right to update or modify terms periodically, and it is your responsibility to review them. If you disagree with any of the terms, please discontinue use immediately. Filmora may suspend or terminate services for non-compliance. Our goal is to provide an innovative and secure experience for video creators. These terms help maintain a fair and professional platform."
              ),
            },
            {
              title: t("2. User Responsibilities"),
              description: t(
                "Users must utilize Filmora in a legal and ethical manner. Unauthorized activities such as hacking, exploiting AI models, or misusing generated content are strictly prohibited. You are responsible for maintaining the security of your account credentials. Any content uploaded or generated must adhere to legal standards and not contain offensive material. Users should not disrupt platform functionality or the experience of others. Any suspicious activity should be reported to Filmora support. Adhering to these guidelines ensures a safe and collaborative environment."
              ),
            },
            {
              title: t("3. Intellectual Property"),
              description: t(
                "Filmora owns all platform branding, technology, and proprietary tools. Users retain ownership of AI-generated content but grant Filmora a license to store and process it. Unauthorized copying, redistribution, or resale of Filmora’s AI-generated assets is prohibited. AI-generated characters, images, and voiceovers must not be misrepresented as entirely human-made. Any copyright infringement must be reported for review. We respect intellectual property laws and expect users to comply. Failure to follow these guidelines may result in content removal or legal action."
              ),
            },
            {
              title: t("4. Termination of Services"),
              description: t(
                "Filmora reserves the right to suspend or terminate accounts that violate terms. Any engagement in fraudulent, unethical, or malicious activities may lead to account revocation. Services may be suspended without prior notice in cases of security concerns. Users may request account deletion by contacting support. Termination does not waive outstanding obligations or liabilities. AI-generated content associated with a terminated account may be removed from Filmora’s servers. Reinstatement of accounts is subject to review and is not guaranteed."
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 bg-transparent w-full"
              style={{ borderColor: colors.primary }}
            >
              <h3 className="text-3xl font-bold" style={{ color: colors.secondary }}>
                {item.title}
              </h3>
              <p className="text-lg text-white">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
