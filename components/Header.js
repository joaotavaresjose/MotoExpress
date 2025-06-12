function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
                <nav className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center h-12">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center">
                                <i className="fas fa-motorcycle text-white text-lg"></i>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-gray-800">MotoExpress</div>
                                <div className="text-xs text-orange-600 font-medium">Transporte Rápido</div>
                            </div>
                        </div>
                        
                        <div className="hidden lg:flex items-center space-x-6">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
                                Início
                            </button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">
                                Serviços
                            </button>
                            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 transition-colors">
                                Preços
                            </button>
                            <button onClick={() => scrollToSection('drivers')} className="text-gray-700 hover:text-orange-600 transition-colors">
                                Motoqueiros
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
                                Contato
                            </button>
                            <Auth />
                        </div>

                        <div className="flex items-center space-x-4 lg:hidden">
                            <Auth />
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 w-10 h-10 flex items-center justify-center"
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="lg:hidden mt-2 pb-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-3 pt-4">
                                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2">
                                    Início
                                </button>
                                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2">
                                    Serviços
                                </button>
                                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2">
                                    Preços
                                </button>
                                <button onClick={() => scrollToSection('drivers')} className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2">
                                    Motoqueiros
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2">
                                    Contato
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
