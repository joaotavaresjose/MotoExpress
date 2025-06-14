function AboutUs() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const features = [
            {
                icon: 'shield-check',
                title: 'Segurança Total',
                description: 'Motociclistas verificados e equipamentos de proteção obrigatórios'
            },
            {
                icon: 'clock',
                title: 'Rapidez Garantida',
                description: 'Chegue ao destino 3x mais rápido que o transporte convencional'
            },
            {
                icon: 'dollar-sign',
                title: 'Preços Justos',
                description: 'Tarifas transparentes e competitivas para todo Angola'
            },
            {
                icon: 'star',
                title: 'Qualidade Premium',
                description: 'Avaliação média de 4.8 estrelas pelos nossos clientes'
            }
        ];

        return (
            <section data-name="about-us" data-file="components/AboutUs.js" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Quem Somos
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Somos a primeira plataforma digital de moto táxi em Angola, 
                                conectando passageiros a motoristas qualificados em todo o país. 
                                Nossa missão é revolucionar o transporte urbano angolano.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <i data-lucide={feature.icon} className="w-5 h-5 text-red-600"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=500&fit=crop" 
                                alt="Equipe MotoTáxi Angola" 
                                className="rounded-2xl shadow-2xl w-full h-auto"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                                <div className="text-3xl font-bold">5+</div>
                                <div className="text-sm opacity-90">Anos de Experiência</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Nossos Números
                            </h3>
                            <p className="text-gray-600">Resultados que comprovam nossa excelência</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">10K+</div>
                                <div className="text-gray-600 text-sm md:text-base">Corridas Realizadas</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
                                <div className="text-gray-600 text-sm md:text-base">Motoristas Ativos</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">15</div>
                                <div className="text-gray-600 text-sm md:text-base">Cidades Atendidas</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4.8★</div>
                                <div className="text-gray-600 text-sm md:text-base">Avaliação Média</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('AboutUs component error:', error);
        reportError(error);
    }
}
