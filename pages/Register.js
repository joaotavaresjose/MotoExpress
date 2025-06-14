function RegisterPage({ setCurrentPage }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        });
        const [isLoading, setIsLoading] = React.useState(false);
        const [error, setError] = React.useState('');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');

            if (formData.password !== formData.confirmPassword) {
                setError('As senhas não coincidem');
                setIsLoading(false);
                return;
            }

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert('Cadastro realizado com sucesso!');
                setCurrentPage('login');
            } catch (err) {
                setError('Erro ao criar conta. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div data-name="register-page" data-file="pages/Register.js" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Criar Conta</h2>
                            <p className="text-gray-600">Cadastre-se no MotoTáxi AO</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    placeholder="+244 900 000 000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    placeholder="••••••••"
                                />
                            </div>

                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary py-3 px-4 rounded-lg font-semibold text-white"
                            >
                                {isLoading ? 'Criando conta...' : 'Criar Conta'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Já tem conta?{' '}
                                <button
                                    onClick={() => setCurrentPage('login')}
                                    className="text-red-600 font-medium hover:text-red-700"
                                >
                                    Faça login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Register page error:', error);
        reportError(error);
    }
}
