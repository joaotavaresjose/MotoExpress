function Footer() {
    try {
        const handleWhatsAppClick = () => {
            const message = "Olá! Gostaria de mais informações sobre o MotoExpress.";
            const phoneNumber = "244951184916";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        };

        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-motorcycle text-white text-lg"></i>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white">MotoExpress</div>
                                    <div className="text-sm text-orange-400">Transporte Rápido</div>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Serviço de moto táxi confiável e seguro. Conectando você ao seu destino 
                                com rapidez e qualidade há mais de 5 anos.
                            </p>
                            <button 
                                onClick={handleWhatsAppClick}
                                className="btn-whatsapp text-white px-6 py-2 rounded-full text-sm flex items-center"
                            >
                                <i className="fab fa-whatsapp mr-2"></i>
                                Fale Conosco
                            </button>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Transporte de Passageiros</li>
                                <li>Delivery Express</li>
                                <li>Serviço 24 Horas</li>
                                <li>Entregas Rápidas</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contato</h3>
                            <div className="space-y-2 text-gray-400">
                                <p className="flex items-center">
                                    <i className="fab fa-whatsapp mr-2 text-green-400"></i>
                                    +244 951184916
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2 text-orange-400"></i>
                                    Viana, Angola
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-clock mr-2 text-blue-400"></i>
                                    24h por dia
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 MotoExpress. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
