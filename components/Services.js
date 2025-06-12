function Services() {
    try {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#services .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const services = [
            {
                icon: 'fas fa-user',
                title: 'Transporte de Passageiros',
                description: 'Leve você ao seu destino com rapidez e segurança.',
                color: 'blue'
            },
            {
                icon: 'fas fa-box',
                title: 'Delivery Express',
                description: 'Entrega rápida de documentos, medicamentos e encomendas.',
                color: 'green'
            },
            {
                icon: 'fas fa-clock',
                title: 'Serviço 24 Horas',
                description: 'Disponível a qualquer hora do dia ou da noite.',
                color: 'purple'
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Segurança Garantida',
                description: 'Motoqueiros habilitados e motos com seguro.',
                color: 'orange'
            }
        ];

        return (
            <section id="services" data-name="services" data-file="components/Services.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="fade-in bg-white p-6 rounded-lg shadow-lg text-center card-hover"
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-${service.color}-100 rounded-full flex items-center justify-center`}>
                                    <i className={`${service.icon} text-3xl text-${service.color}-600`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
