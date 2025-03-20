import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const colors = {
  primary: "##D4A017", // Green
  secondary: "#FFFFFF", // White
  text: "#000000", // Black
};

const AIFeatures = () => {
  const { t } = useTranslation();

  
  const features = [
    {
      id: 'content-creation',
      title: t('contentCreation', 'Content Creation'),
      description: 'Generate engaging content for blogs, articles, and more with our AI-powered content creation tool.',
      imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      path: '/ai-features/content-writting'
    },
    {
      id: 'plagiarism-remover',
      title: t('plagiarismRemover', 'Plagiarism Remover'),
      description: 'Detect and eliminate plagiarism from your documents using our advanced AI tool.',
      imageUrl: 'https://www.apexwritings.com/wp-content/uploads/2019/03/Plagiarism-removal-service-e1607147884440.jpg',
      path: '/ai-features/palgirism-remover'
    },
    {
      id: 'social-media-post',
      title: t('socialMediaPost', 'Social Media Post Content'),
      description: 'Create captivating social media posts that boost engagement with our AI tool.',
      imageUrl: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      path: '/ai-features/social-media-post-generator'
    },
    {
      id: 'grammar-correction',
      title: t('grammarCorrection', 'Grammar Correction'),
      description: 'Enhance your writing by correcting grammar mistakes and improving sentence structure with AI.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-KGZUsrvtCGE_2s8PAjO14SIhr-2rhg9FQ&s',
      path: '/ai-features/grammar-checker'
    }
  ];

  return (
   
  <>
  </> 
   
  );
};

export default AIFeatures;
