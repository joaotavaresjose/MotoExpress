function Contact() {
    try {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#contact .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const handleWhatsAppClick = () => {
            const message = "Olá! Gostaria de solicitar uma corrida de moto táxi.";
            const phoneNumber = "244951184916";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        };

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="fade-in">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Solicite sua Corrida</h3>
                            <p className="text-gray-600 mb-8">
                                Estamos disponíveis 24 horas para atendê-lo. 
                                Clique no botão abaixo e chame um moto táxi agora mesmo!
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fab fa-whatsapp text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                                        <p className="text-gray-600">+244 951184916</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-map-marker-alt text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Área de Atendimento</h4>
                                        <p className="text-gray-600">Viana e região metropolitana</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-clock text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Horário</h4>
                                        <p className="text-gray-600">24 horas por dia, 7 dias por semana</p>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={handleWhatsAppClick}
                                className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center pulse-animation"
                            >
                                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                                Chamar Moto Táxi Agora
                            </button>
                        </div>

                        <div className="fade-in">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Como Funciona</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                                            1
                                        </div>
                                        <p className="text-gray-600">Clique no botão WhatsApp</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                                            2
                                        </div>
                                        <p className="text-gray-600">Informe seu local de partida e destino</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                                            3
                                        </div>
                                        <p className="text-gray-600">Aguarde o motoqueiro chegar em até 5 minutos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
