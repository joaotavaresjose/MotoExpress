function Footer() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <i data-lucide="zap" className="w-8 h-8 text-red-500"></i>
                                <span className="text-2xl font-bold">MotoTáxi AO</span>
                            </div>
                            <p className="text-gray-400">
                                Transporte rápido e seguro para passageiros em toda Angola
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Transporte de Passageiros</li>
                                <li>Localização Automática</li>
                                <li>Serviço Expresso</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contato</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center space-x-2">
                                    <i data-lucide="phone" className="w-4 h-4"></i>
                                    <span>+244 951 184 916</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <i data-lucide="mail" className="w-4 h-4"></i>
                                    <span>info@mototaxiao.ao</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/share/18uWadGwix/?mibextid=qi2Omg" target="_blank"  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                                    <i data-lucide="facebook" className="w-5 h-5"></i>
                                </a>
                                <a href="https://www.instagram.com/engjoaotavaresjose?igsh=YzljYTk1ODg3Zg==" target="_blank" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                                    <i data-lucide="instagram" className="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 MotoTáxi AO. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
