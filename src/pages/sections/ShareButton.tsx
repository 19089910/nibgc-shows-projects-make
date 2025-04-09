import { Share2 } from "lucide-react";

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "As Aventuras dos Brinquedos",
        text: "Confira este evento incrível!",
        url: window.location.href
      }).catch(err => console.error("Erro ao compartilhar:", err));
    } else {
      alert("Seu navegador não suporta compartilhamento.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-toy-yellow text-toy-blue rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-all duration-300 animate-bounce"
        style={{ animationDuration: '3s' }}
        onClick={handleShare}
        aria-label="Compartilhar evento"
      >
        <Share2 size={24} />
      </button>
    </div>
  );
};

export default ShareButton;
