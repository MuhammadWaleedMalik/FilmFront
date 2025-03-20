import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRobot } from "react-icons/fa"; // Importing a robot icon

const NotFound = () => {
  const { t } = useTranslation();


  const colors = {
    primary: "#D4A017",
    secondary: "#D4A017",
    text: "white",
    bg: "black",
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center  px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center bg-white p-10 rounded-2xl shadow-2xl"
        style={{
          borderColor: colors.secondary,
          borderWidth: "3px",
          background: colors.bg,
        }}
      >
        {/* 404 Design */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <h1 className="text-9xl font-extrabold" style={{ color: colors.secondary }}>
            404
          </h1>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full rounded-full border-4 border-blue-400 opacity-40"
          />
        </motion.div>

        {/* Floating Robot Animation */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-6 text-7xl text-gray-700"
        >
          <FaRobot />
        </motion.div>

        {/* Message */}
        <h2 className="mt-6 text-4xl font-bold" style={{ color: colors.secondary }}>
          {t("Page Not Found")}
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          {t("Oops! The page you are looking for does not exist.")}
        </p>

        {/* Glowing Button */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link
            to="/"
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all"
            style={{
              backgroundColor: colors.secondary,
              boxShadow: "0px 0px 20px rgba(5, 61, 166, 0.6)",
            }}
          >
            {t("Back to Home")}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
