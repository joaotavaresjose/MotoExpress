function Drivers() {
    try {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#drivers .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const drivers = [
            {
                name: "Carlos Silva",
                experience: "8 anos",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                name: "João Santos",
                experience: "6 anos",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
            },
            {
                name: "Pedro Costa",
                experience: "5 anos",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
            }
        ];

        return (
            <section id="drivers" data-name="drivers" data-file="components/Drivers.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Motoqueiros</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {drivers.map((driver, index) => (
                            <div key={index} className="fade-in text-center bg-white p-6 rounded-lg shadow-lg">
                                <img 
                                    src={driver.photo} 
                                    alt={driver.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{driver.name}</h3>
                                <p className="text-orange-600 font-medium">{driver.experience} de experiência</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="fade-in">
                            <img 
                                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop" 
                                alt="Motoqueiro profissional" 
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>

                        <div className="fade-in">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">Profissionais Experientes</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-id-card text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Habilitação em Dia</h4>
                                        <p className="text-gray-600">Todos os motoqueiros possuem CNH categoria A válida.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-tools text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Motos Revisadas</h4>
                                        <p className="text-gray-600">Manutenção regular e inspeção de segurança.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-star text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Experiência Comprovada</h4>
                                        <p className="text-gray-600">Mais de 5 anos de experiência no trânsito da cidade.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Drivers component error:', error);
        reportError(error);
    }
}
