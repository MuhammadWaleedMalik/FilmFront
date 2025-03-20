import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Privacy = () => {
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
        {/* Title */}
        <h1
          className="text-6xl font-extrabold text-center mb-12"
          style={{ color: colors.primary }}
        >
          {t("Privacy Policy")}
        </h1>

        {/* Privacy Sections */}
        <div className="space-y-8 w-full">
          {[
            {
              title: t("🔍 Data Collection"),
              content: t(
                "Filmora collects user data, including names, emails, and payment details, to enhance AI-driven video generation services. Our platform ensures that collected data is minimal and strictly necessary for improving your experience. We do not sell or share user data with third parties for advertising purposes. All data collection methods comply with international privacy standards. Users have full transparency and control over their stored information. Filmora employs encryption and secure storage protocols to safeguard personal data. Data collected helps improve AI-generated video quality and platform performance. Users can request access, modification, or deletion of their data at any time. Our commitment to privacy ensures that your information remains secure and confidential."
              ),
            },
            {
              title: t("🔐 Secure Payments"),
              content: t(
                "Filmora ensures that all transactions are encrypted and processed securely to protect users from unauthorized access. We use trusted payment gateways that comply with global security standards. Filmora does not store sensitive financial details on its servers. Transactions are continuously monitored to prevent fraud and unauthorized activities. Users receive transaction confirmations for every purchase made on our platform. We strictly follow PCI-DSS compliance for maximum payment security. Refunds and payment disputes are handled transparently and fairly. Users can update or remove payment details at any time through account settings. Our strict financial security measures ensure that your payment information remains confidential."
              ),
            },
            {
              title: t("🎯 Data Usage"),
              content: t(
                "User data is used solely to improve Filmora’s AI-generated video and media services. We analyze platform interactions to enhance personalized video recommendations and optimize AI algorithms. No user data is shared with advertisers or external marketing firms. AI-generated content uses anonymized data to refine output quality and performance. Users can opt out of certain data tracking settings within their accounts. Filmora remains committed to ethical data usage, ensuring transparency in how user information is processed. Any collected data is used strictly for improving AI functionalities and enhancing the user experience. Our team actively monitors and updates data policies to protect user privacy."
              ),
            },
            {
              title: t("⚖️ Your Rights"),
              content: t(
                "Users have full control over their personal data, including the right to request modifications or deletions. You can request account removal by reaching out to our support team. Some data may be retained for legal compliance or fraud prevention. Data deletion requests are processed within a reasonable timeframe. Users are entitled to access their stored data upon request. Filmora adheres to GDPR, CCPA, and other international privacy regulations. You have the right to withdraw consent for data processing at any time. Transparency and accountability guide our approach to user rights. If you have any privacy-related concerns, our team is available to assist."
              ),
            },
            {
              title: t("🍪 Cookies & Tracking"),
              content: t(
                "Filmora utilizes cookies and tracking technologies to enhance user experience and platform performance. Cookies help store preferences, making video creation workflows seamless. Users can disable cookies through their browser settings if desired. Some features may not function optimally if cookies are disabled. We do not use tracking technologies for intrusive advertising or unauthorized profiling. Data collected via cookies is used solely to improve AI-generated content and website efficiency. Filmora respects user choices regarding tracking technologies. Third-party analytics tools comply with their own privacy policies. Users can manage cookie preferences directly from their account settings."
              ),
            },
            {
              title: t("🚀 Third-Party Services"),
              content: t(
                "Filmora integrates trusted third-party AI tools and analytics to enhance video generation capabilities. Each third-party service follows its own privacy policies and security standards. We ensure that external integrations comply with data protection laws. Filmora does not share personally identifiable information with third parties unless required for functionality. Users can review and manage third-party integrations through account settings. We only collaborate with partners who maintain high-security standards. Transparency is key in our partnerships, ensuring that user data remains secure. Data shared with third-party services is strictly limited to essential functions. Users have full control over their interactions with external integrations."
              ),
            },
            {
              title: t("📅 Policy Updates"),
              content: t(
                "Filmora may update its privacy policy periodically to reflect new security measures and technological advancements. Users will be notified of any major changes affecting data handling. Our updates prioritize user privacy and data protection. We encourage users to review the policy regularly for the latest information. Significant updates will be communicated via email or in-platform notifications. Filmora remains dedicated to transparency in all privacy-related policies. Our privacy framework evolves to keep pace with industry standards. User feedback is always considered in policy updates. If you have concerns about policy changes, please contact our support team for clarification."
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 bg-transparent w-full"
              style={{ borderColor: colors.primary }}
            >
              <h2 className="text-3xl font-bold" style={{ color: colors.secondary }}>
                {section.title}
              </h2>
              <p className="text-lg text-white">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-white">
            {t("Have questions? Contact us at")}{" "}
            <span className="font-semibold" style={{ color: colors.primary }}>
              mauzsite@gmail.com
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
