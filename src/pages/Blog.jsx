import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const colors = {
    primary: "#D4A017",
    secondary: "white",
    text: "white",
    background: "black",
    highlight: "#0051D4",
    border: "#003A91",
  };

  const blogs = [
    {
      title: "AI Image Generation",
      content:
        "Transform ideas into stunning visuals with AI-generated images. " +
        "Filmora creates unique graphics tailored to your needs. " +
        "Choose from different styles, themes, and resolutions. " +
        "Generate artwork, backgrounds, or illustrations instantly. " +
        "AI ensures high-quality images with deep details. " +
        "Enhance presentations, videos, and creative projects. " +
        "Get stunning images without design experience.",
    },
    {
      title: "AI-Generated Characters",
      content:
        "Create lifelike AI-generated characters for any project. " +
        "Choose facial features, expressions, and animations. " +
        "Use AI-driven avatars in videos, games, or presentations. " +
        "Personalize clothing, hairstyles, and emotions. " +
        "Generate realistic or stylized characters in seconds. " +
        "Seamlessly integrate them into storytelling or branding. " +
        "Filmora makes character creation easier than ever.",
    },
    {
      title: "AI Background Generation",
      content:
        "Create immersive AI-generated backgrounds effortlessly. " +
        "Filmora helps you design dynamic settings for videos or images. " +
        "Choose from different environments, styles, and moods. " +
        "Enhance storytelling with realistic or artistic backdrops. " +
        "Generate high-resolution backgrounds for any project. " +
        "Filmora simplifies background creation with AI.",
    },
    {
      title: "AI Theme Generation",
      content:
        "Customize AI-generated themes for your brand or projects. " +
        "Filmora provides dynamic styles tailored to your content. " +
        "Select colors, fonts, and layouts with AI assistance. " +
        "Create unique branding themes instantly. " +
        "AI enhances UI/UX design with smart theme generation. " +
        "Filmora helps you maintain consistency across media.",
    },
  ];

  return (
    <div className="min-h-screen mb-12 bg-black mt-24 flex flex-col items-start justify-start px-12 pt-12">
      <h1 className="text-6xl font-extrabold text-center w-full mb-10" style={{ color: colors.secondary }}>
        {t("Filmora Blogs")}
      </h1>

      <div className="space-y-6 w-full">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 bg-transparent"
            style={{ borderColor: colors.primary, color: colors.text }}
          >
            <h3 className="text-3xl font-bold">{t(blog.title)}</h3>
            <p className="text-lg">{t(blog.content)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
