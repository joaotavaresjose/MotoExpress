function LoginPage({ setCurrentPage }) {
    try {
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [error, setError] = React.useState('');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleLogin = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (email === 'demo@mototaxi.ao' && password === '123456') {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('userEmail', email);
                    alert('Login realizado com sucesso!');
                    setCurrentPage('home');
                } else {
                    setError('Email ou senha inválidos');
                }
            } catch (err) {
                setError('Erro ao fazer login. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="login-page" data-file="pages/Login.js" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <i data-lucide="zap" className="w-10 h-10 text-red-600"></i>
                                <span className="text-3xl font-bold text-gray-800">MotoTáxi AO</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Faça seu Login</h2>
                            <p className="text-gray-600">Entre na sua conta</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                                className="w-full btn-primary py-3 px-4 rounded-lg font-semibold text-white disabled:opacity-50"
                            >
                                {isLoading ? 'Entrando...' : 'Entrar'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Não tem conta?{' '}
                                <button
                                    onClick={() => setCurrentPage('register')}
                                    className="text-red-600 font-medium hover:text-red-700"
                                >
                                    Cadastre-se
                                </button>
                            </p>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Demo:</strong> email: demo@mototaxi.ao, senha: 123456
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Login page error:', error);
        reportError(error);
    }
}
