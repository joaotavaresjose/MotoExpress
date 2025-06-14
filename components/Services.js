function Services() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const services = [
            {
                icon: 'user',
                title: 'Transporte de Passageiros',
                description: 'Leve você rapidamente ao seu destino com segurança e conforto.'
            },
            {
                icon: 'map-pin',
                title: 'Localização Automática',
                description: 'Detectamos sua localização automaticamente para facilitar sua viagem.'
            },
            {
                icon: 'clock',
                title: 'Disponível 24/7',
                description: 'Serviço disponível todos os dias, a qualquer hora que precisar.'
            },
            {
                icon: 'shield-check',
                title: 'Motoristas Verificados',
                description: 'Todos os nossos motociclistas passam por rigorosa verificação.'
            }
        ];

        return (
            <section data-name="services" data-file="components/Services.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="text-xl text-gray-600">
                            Transporte rápido e seguro para todas as suas necessidades
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card bg-white p-8 rounded-xl shadow-lg text-center"
                            >
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i data-lucide={service.icon} className="w-8 h-8 text-red-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
    }
}
