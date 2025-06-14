function BookRidePage() {
    try {
        const [destination, setDestination] = React.useState('');
        const [currentLocation, setCurrentLocation] = React.useState('');
        const [suggestions, setSuggestions] = React.useState([]);
        const [showSuggestions, setShowSuggestions] = React.useState(false);
        const [isLoading, setIsLoading] = React.useState(false);

        React.useEffect(() => {
            lucide.createIcons();
            getCurrentLocation();
        }, []);

        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setCurrentLocation('Localização atual detectada');
                    },
                    (error) => {
                        setCurrentLocation('Maianga, Luanda');
                    }
                );
            } else {
                setCurrentLocation('Maianga, Luanda');
            }
        };

        const luandaLocations = [
            'Ingombota, Luanda',
            'Maianga, Luanda',
            'Rangel, Luanda',
            'Sambizanga, Luanda',
            'Samba, Luanda',
            'Kilamba, Luanda',
            'Talatona, Luanda',
            'Viana, Luanda',
            'Cacuaco, Luanda',
            'Cazenga, Luanda',
            'Belas, Luanda',
            'Icolo e Bengo, Luanda',
            'Aeroporto Internacional 4 de Fevereiro',
            'Marginal de Luanda',
            'Ilha do Cabo',
            'Mussulo',
            'Universidade Agostinho Neto',
            'Hospital Américo Boavida',
            'Shopping Belas',
            'Fortaleza de São Miguel'
        ];

        const handleDestinationChange = (e) => {
            const value = e.target.value;
            setDestination(value);

            if (value.length > 0) {
                const filtered = luandaLocations.filter(location =>
                    location.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestions(filtered);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        };

        const selectSuggestion = (suggestion) => {
            setDestination(suggestion);
            setSuggestions([]);
            setShowSuggestions(false);
        };

        const handleBookRide = async (e) => {
            e.preventDefault();
            setIsLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                alert('Corrida solicitada com sucesso! Um motociclista será designado em breve.');
                setDestination('');
            } catch (err) {
                alert('Erro ao solicitar corrida. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="book-ride-page" data-file="pages/BookRide.js" className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">Solicitar Corrida</h1>
                                <p className="text-gray-600">Para onde você quer ir?</p>
                            </div>

                            <form onSubmit={handleBookRide} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <i data-lucide="map-pin" className="w-4 h-4 inline mr-2 text-green-600"></i>
                                        Sua Localização
                                    </label>
                                    <div className="w-full px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
                                        {currentLocation}
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <i data-lucide="navigation" className="w-4 h-4 inline mr-2 text-red-600"></i>
                                        Destino
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={destination}
                                        onChange={handleDestinationChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                        placeholder="Digite o endereço de destino"
                                        autoComplete="off"
                                    />
                                    
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {suggestions.map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => selectSuggestion(suggestion)}
                                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                                                >
                                                    <i data-lucide="map-pin" className="w-4 h-4 inline mr-2 text-gray-400"></i>
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Preço Estimado</h3>
                                    <p className="text-2xl font-bold text-red-600">1.500 Kz - 3.000 Kz</p>
                                    <p className="text-sm text-gray-600">*Preço pode variar conforme distância e trânsito</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn-primary py-4 px-6 rounded-lg font-semibold text-white disabled:opacity-50"
                                >
                                    {isLoading ? 'Solicitando...' : 'Solicitar Corrida'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('BookRide page error:', error);
        reportError(error);
    }
}
