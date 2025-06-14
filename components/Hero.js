function Hero({ setCurrentPage }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section data-name="hero" data-file="components/Hero.js" className="hero-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="fade-in">
                        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
                            Transporte Rápido<br />e Seguro em Angola
                        </h1>
                        <p className="hero-subtitle text-xl md:text-2xl mb-8 opacity-90">
                            Chegue ao seu destino com rapidez e economia
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('book')}
                                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
                            >
                                <i data-lucide="smartphone" className="w-5 h-5"></i>
                                <span>Solicitar Corrida</span>
                            </button>
                            <button
                                onClick={() => setCurrentPage('about')}
                                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                            >
                                Saiba Mais
                            </button>
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
