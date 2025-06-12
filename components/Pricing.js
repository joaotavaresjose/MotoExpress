function Pricing() {
    try {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#pricing .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const handleWhatsAppClick = () => {
            const message = "Olá! Gostaria de saber mais sobre os preços das corridas.";
            const phoneNumber = "244951184916";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        };

        return (
            <section id="pricing" data-name="pricing" data-file="components/Pricing.js" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Preços Justos</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="fade-in bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Corrida Curta</h3>
                            <div className="text-4xl font-bold text-orange-600 mb-2">500 Kz</div>
                            <p className="text-gray-600 mb-6">Até 3 km de distância</p>
                            <ul className="text-left space-y-2 mb-6">
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Rápido e seguro</li>
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Capacete incluso</li>
                            </ul>
                        </div>

                        <div className="fade-in bg-orange-600 p-8 rounded-lg text-center text-white transform scale-105">
                            <h3 className="text-2xl font-bold mb-4">Corrida Média</h3>
                            <div className="text-4xl font-bold mb-2">800 Kz</div>
                            <p className="text-orange-100 mb-6">De 3 a 8 km de distância</p>
                            <ul className="text-left space-y-2 mb-6">
                                <li className="flex items-center"><i className="fas fa-check text-white mr-2"></i>Mais popular</li>
                                <li className="flex items-center"><i className="fas fa-check text-white mr-2"></i>Melhor custo-benefício</li>
                            </ul>
                            <button 
                                onClick={handleWhatsAppClick}
                                className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
                            >
                                Chamar Agora
                            </button>
                        </div>

                        <div className="fade-in bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Corrida Longa</h3>
                            <div className="text-4xl font-bold text-orange-600 mb-2">1200 Kz</div>
                            <p className="text-gray-600 mb-6">Acima de 8 km</p>
                            <ul className="text-left space-y-2 mb-6">
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Conforto garantido</li>
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Trajeto otimizado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing component error:', error);
        reportError(error);
    }
}
