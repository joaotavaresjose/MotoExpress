function App() {
    try {
        React.useEffect(() => {
            document.documentElement.classList.add('scroll-smooth');
        }, []);

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Header />
                <Hero />
                <Services />
                <Pricing />
                <Drivers />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
