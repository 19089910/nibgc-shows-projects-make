
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center cloud-bg">
      <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl max-w-md">
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img 
            src="https://i.imgur.com/dkK6Nvr.png" 
            alt="Rex" 
            className="w-full h-full object-contain animate-bounce" 
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-toy-blue">404</h1>
        <p className="text-xl text-gray-700 mb-6">Opa! Essa página não foi encontrada</p>
        <Link to="/" className="toy-button primary inline-flex">
          <Home size={18} className="mr-2" /> Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
