function AboutPage() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const stats = [
            { number: '1000+', label: 'Corridas Realizadas' },
            { number: '50+', label: 'Motociclistas Ativos' },
            { number: '24/7', label: 'Atendimento' },
            { number: '4.8★', label: 'Avaliação Média' }
        ];

        return (
            <div data-name="about-page" data-file="pages/About.js" className="min-h-screen bg-white">
                <div className="hero-gradient text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o MotoTáxi AO</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Conectamos você ao melhor serviço de transporte em motocicleta de Angola
                        </p>
                    </div>
                </div>

                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Revolucionar o transporte urbano em Angola, oferecendo soluções rápidas, 
                                    seguras e acessíveis para todos os angolanos.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Acreditamos que o transporte eficiente é fundamental para o desenvolvimento 
                                    das nossas cidades e melhoria da qualidade de vida.
                                </p>
                            </div>
                            <div className="text-center">
                                <img 
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop" 
                                    alt="Motociclista" 
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-red-50 p-12 rounded-2xl text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que escolher o MotoTáxi AO?</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <i data-lucide="shield-check" className="w-12 h-12 text-red-600 mx-auto mb-4"></i>
                                    <h3 className="font-semibold text-gray-800 mb-2">Segurança Garantida</h3>
                                    <p className="text-gray-600">Motociclistas verificados e equipamentos de segurança</p>
                                </div>
                                <div>
                                    <i data-lucide="clock" className="w-12 h-12 text-red-600 mx-auto mb-4"></i>
                                    <h3 className="font-semibold text-gray-800 mb-2">Rapidez</h3>
                                    <p className="text-gray-600">Chegue ao destino mais rápido que qualquer outro meio</p>
                                </div>
                                <div>
                                    <i data-lucide="dollar-sign" className="w-12 h-12 text-red-600 mx-auto mb-4"></i>
                                    <h3 className="font-semibold text-gray-800 mb-2">Preço Justo</h3>
                                    <p className="text-gray-600">Tarifas transparentes e competitivas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('About page error:', error);
        reportError(error);
    }
}
