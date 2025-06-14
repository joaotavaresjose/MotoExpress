function ProfilePage() {
    try {
        const [user, setUser] = React.useState(null);
        const [recentRides, setRecentRides] = React.useState([]);

        React.useEffect(() => {
            lucide.createIcons();
            
            const currentUser = AuthUtils.getCurrentUser();
            setUser(currentUser);

            const mockRides = [
                {
                    id: 1,
                    from: 'Maianga, Luanda',
                    to: 'Ingombota, Luanda',
                    date: '2024-01-15',
                    price: '2.500 Kz',
                    status: 'Concluída'
                },
                {
                    id: 2,
                    from: 'Viana, Luanda',
                    to: 'Cazenga, Luanda',
                    date: '2024-01-12',
                    price: '3.200 Kz',
                    status: 'Concluída'
                },
                {
                    id: 3,
                    from: 'Kilamba, Luanda',
                    to: 'Talatona, Luanda',
                    date: '2024-01-10',
                    price: '1.800 Kz',
                    status: 'Concluída'
                }
            ];
            setRecentRides(mockRides);
        }, []);

        const stats = [
            { icon: 'map-pin', label: 'Total de Viagens', value: '12' },
            { icon: 'star', label: 'Avaliação', value: '4.8' },
            { icon: 'wallet', label: 'Gasto Total', value: '28.500 Kz' },
            { icon: 'clock', label: 'Tempo Economizado', value: '3h 45m' }
        ];

        if (!user) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-600">Carregando perfil...</p>
                    </div>
                </div>
            );
        }

        return (
            <div data-name="profile-page" data-file="pages/Profile.js" className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                                    <i data-lucide="user" className="w-10 h-10 text-red-600"></i>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">{user.name || 'Usuário Demo'}</h1>
                                    <p className="text-gray-600">{user.email}</p>
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mt-2">
                                        Cliente Verificado
                                    </span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                        <i data-lucide={stat.icon} className="w-8 h-8 text-red-600 mx-auto mb-2"></i>
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Viagens Recentes</h2>
                            <div className="space-y-4">
                                {recentRides.map(ride => (
                                    <div key={ride.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <i data-lucide="map-pin" className="w-4 h-4 text-green-600"></i>
                                                    <span className="text-sm text-gray-600">De:</span>
                                                    <span className="font-medium">{ride.from}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <i data-lucide="navigation" className="w-4 h-4 text-red-600"></i>
                                                    <span className="text-sm text-gray-600">Para:</span>
                                                    <span className="font-medium">{ride.to}</span>
                                                </div>
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <span>{ride.date}</span>
                                                    <span className="text-green-600 font-medium">{ride.status}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-red-600">{ride.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Profile page error:', error);
        reportError(error);
    }
}
