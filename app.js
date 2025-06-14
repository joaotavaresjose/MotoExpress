function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const renderPage = () => {
            switch (currentPage) {
                case 'home':
                    return (
                        <div>
                            <Hero setCurrentPage={setCurrentPage} />
                            <Services />
                            <AboutUs />
                        </div>
                    );
                case 'login':
                    return <LoginPage setCurrentPage={setCurrentPage} />;
                case 'register':
                    return <RegisterPage setCurrentPage={setCurrentPage} />;
                case 'book':
                    return <BookRidePage />;
                case 'about':
                    return <AboutPage />;
                case 'profile':
                    return <ProfilePage />;
                default:
                    return (
                        <div>
                            <Hero setCurrentPage={setCurrentPage} />
                            <Services />
                            <AboutUs />
                        </div>
                    );
            }
        };

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                {currentPage !== 'login' && currentPage !== 'register' && (
                    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
                )}
                
                <main>
                    {renderPage()}
                </main>

                {currentPage !== 'login' && currentPage !== 'register' && <Footer />}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
