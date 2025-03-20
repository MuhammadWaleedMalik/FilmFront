import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from  './pages/NotFound';
import Privacy from   './pages/Privacy';
import Terms from     './pages/Terms';
import Aboutus from   './pages/Aboutus';
import PricingBasic from './pages/PricingBasic';
import PricingEnterprice from './pages/PricingEnterprice';
import PricingPro from './pages/PricingPro';






import ProtectedRoute from './components/ProtectedRoute';




import AIFeatures from './pages/AIFeatures';
import AiThemeGen from './pages/features/AiThemeGen';
import AiCharacterGen from './pages/features/AiCharacterGen';
import AiImageGen from './pages/features/AiImageGen';
import AiBackgroundGen from './pages/features/AiBackgroundGen';
import DashboardC from './pages/DashboardC';







function App() {
  return (  
    <Routes>
      <Route path="/admin/*" element={<DashboardC />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
          <Route path="pricing" element={<Pricing />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="pricing/basic" element={<PricingBasic />} />
          <Route path="pricing/enterprise" element={<PricingEnterprice />} />
          <Route path="pricing/pro" element={<PricingPro />} />
    
        
          <Route path="ai-features" element={<AIFeatures/>} />
         
          
          <Route path="ai-features/AIThemeGen"  element={<AiThemeGen/>} />
          <Route path="ai-features/AICharacterGen" element={<AiCharacterGen/>} />
          <Route path="ai-features/AIImageGen" element={<AiImageGen/>} />
          <Route path="ai-features/AIBackgroundGen" element={<AiBackgroundGen/>} />
          
        



        
        
          
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="aboutus" element={<Aboutus/>} />
        
        
        <Route path="*" element={<NotFound />} />
      
      
      


      </Route>
    </Routes>
  );
}

export default App;