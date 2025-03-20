import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
    const colors = {
      primary: "#D4A017",
      secondary: "#D4A017",
      text: "white",
      bg: "linear-gradient(135deg, gray, black)", 
      highlight: "#0051D4",
      border: "#003A91",
    };


  return (
    <footer className="pt-16 pb-10 w-full text-white" style={{ background: colors.bg }}>
      <div className="w-full px-6 sm:px-8 lg:px-12 text-center">
        {/* Brand Info Centered */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/"
            className="text-5xl font-bold"
            style={{ color: colors.primary }}
          >
            {t("Filmora")}
          </Link>
        </motion.div>
        <p className="mt-2 text-lg text-gray-300">
          {t("Wondershare Filmora for polishing video")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 text-left">
          {/* Company Links Left */}
          <div className="text-left">
            <motion.h3
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.primary }}
            >
              {t("Company")}
            </motion.h3>
            <ul className="space-y-3 text-xl">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="/aboutus"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("About Us")}
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("Blogs")}
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Legal Links Right */}
          <div className="text-left">
            <motion.h3
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.primary }}
            >
              {t("Legal")}
            </motion.h3>
            <ul className="space-y-3 text-xl">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("Terms")}
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("Privacy")}
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-16 pt-6 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} {t("Filmora. All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
