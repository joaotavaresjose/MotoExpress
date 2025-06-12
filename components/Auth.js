function Auth() {
    try {
        const [isLoginMode, setIsLoginMode] = React.useState(true);
        const [isOpen, setIsOpen] = React.useState(false);
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        });

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (isLoginMode) {
                console.log('Login:', { email: formData.email, password: formData.password });
                alert('Login realizado com sucesso!');
            } else {
                if (formData.password !== formData.confirmPassword) {
                    alert('Senhas não coincidem!');
                    return;
                }
                console.log('Cadastro:', formData);
                alert('Cadastro realizado com sucesso!');
            }
            setIsOpen(false);
            setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
        };

        const toggleMode = () => {
            setIsLoginMode(!isLoginMode);
            setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
        };

        const closeModal = (e) => {
            if (e.target.classList.contains('auth-modal')) {
                setIsOpen(false);
            }
        };

        return (
            <div data-name="auth" data-file="components/Auth.js">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                    <i className="fas fa-user mr-2"></i>
                    Entrar
                </button>

                {isOpen && (
                    <div className="auth-modal" onClick={closeModal}>
                        <div className="auth-modal-content p-6" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {isLoginMode ? 'Entrar' : 'Cadastrar'}
                                </h2>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {!isLoginMode && (
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                            required={!isLoginMode}
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {!isLoginMode && (
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">Telefone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                            required={!isLoginMode}
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">Senha</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {!isLoginMode && (
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">Confirmar Senha</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                            required={!isLoginMode}
                                        />
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                                >
                                    {isLoginMode ? 'Entrar' : 'Cadastrar'}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={toggleMode}
                                    className="text-orange-600 hover:text-orange-700 font-medium"
                                >
                                    {isLoginMode ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Auth component error:', error);
        reportError(error);
    }
}
