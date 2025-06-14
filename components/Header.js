function Header({ currentPage, setCurrentPage }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isProfileOpen, setIsProfileOpen] = React.useState(false);
        const [isAuthenticated, setIsAuthenticated] = React.useState(false);

        React.useEffect(() => {
            lucide.createIcons();
            setIsAuthenticated(AuthUtils.isAuthenticated());
        }, [currentPage]);

        const menuItems = [
            { id: 'home', label: 'Início' },
            { id: 'book', label: 'Solicitar Corrida' },
            { id: 'about', label: 'Sobre' },
            ...(isAuthenticated ? [] : [{ id: 'login', label: 'Login' }])
        ];

        const handleLogout = () => {
            AuthUtils.logout();
            setIsAuthenticated(false);
            setIsProfileOpen(false);
            setCurrentPage('home');
            alert('Logout realizado com sucesso!');
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="bg-white shadow-lg sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={() => setCurrentPage('home')}
                            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                        >
                            <i data-lucide="zap" className="w-8 h-8 text-red-600"></i>
                            <span className="text-2xl font-bold text-gray-800">MotoTáxi AO</span>
                        </button>

                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`font-medium transition-colors ${
                                        currentPage === item.id 
                                            ? 'text-red-600' 
                                            : 'text-gray-600 hover:text-red-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {isAuthenticated && (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                                    >
                                        <i data-lucide="user" className="w-6 h-6"></i>
                                    </button>
                                    
                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-10">
                                            <button
                                                onClick={() => {
                                                    setCurrentPage('profile');
                                                    setIsProfileOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-2"
                                            >
                                                <i data-lucide="user" className="w-4 h-4"></i>
                                                <span>Meu Perfil</span>
                                            </button>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-2 text-red-600"
                                            >
                                                <i data-lucide="log-out" className="w-4 h-4"></i>
                                                <span>Sair</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2"
                            >
                                <i data-lucide="menu" className="w-6 h-6"></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4">
                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left py-2 text-gray-600 hover:text-red-600"
                                >
                                    {item.label}
                                </button>
                            ))}
                            {isAuthenticated && (
                                <div className="border-t pt-2 mt-2">
                                    <button
                                        onClick={() => {
                                            setCurrentPage('profile');
                                            setIsMenuOpen(false);
                                        }}
                                        className="block w-full text-left py-2 text-gray-600 hover:text-red-600"
                                    >
                                        Meu Perfil
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left py-2 text-red-600 hover:text-red-700"
                                    >
                                        Sair
                                    </button>
                                </div>
                            )}
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
