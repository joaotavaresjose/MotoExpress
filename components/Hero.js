function Hero() {
    try {
        const handleWhatsAppClick = () => {
            const message = "Olá! Gostaria de solicitar uma corrida de moto táxi.";
            const phoneNumber = "244951184916";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        };

        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="min-h-screen flex items-center gradient-bg bg-pattern pt-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto hero-text">
                        <div className="mb-8 flex justify-center">
                            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <i className="fas fa-motorcycle text-6xl text-red-700 motorcycle-icon"></i>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-black">
                            Transporte Rápido e Seguro
                        </h1>
                        <h2 className="text-xl md:text-2xl mb-6 text-black font-medium">
                            Chegue ao seu destino em minutos!
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-black leading-relaxed">
                            Serviço de moto táxi 24 horas com motoqueiros experientes, 
                            motos revisadas e preços justos. Sua segurança é nossa prioridade.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button 
                                onClick={handleWhatsAppClick}
                                className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center"
                            >
                                <i className="fab fa-whatsapp mr-2 text-xl"></i>
                                Chamar Agora
                            </button>
                            <button 
                                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors"
                            >
                                Ver Serviços
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-700">24h</div>
                                <div className="text-sm text-red-70 opacity-80">Disponível</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-700">5min</div>
                                <div className="text-sm text-red-70 opacity-80">Chegada</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-700">100%</div>
                                <div className="text-sm text-red-70 opacity-80">Seguro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
