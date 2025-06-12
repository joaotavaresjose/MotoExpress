function Education() {
    try {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('#education .fade-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        const education = [
            {
                year: '2024',
                title: 'Certificação React Advanced',
                institution: 'Meta (Facebook)',
                description: 'Certificação avançada em React com foco em hooks, context e performance.'
            },
            {
                year: '2023',
                title: 'JavaScript ES6+ Especialização',
                institution: 'Udemy',
                description: 'Curso completo sobre JavaScript moderno e suas funcionalidades avançadas.'
            },
            {
                year: '2022',
                title: 'Fundamentos de Front-end',
                institution: 'FreeCodeCamp',
                description: 'Certificação completa em HTML5, CSS3 e JavaScript fundamentais.'
            },
            {
                year: '2021',
                title: 'UI/UX Design Básico',
                institution: 'Google',
                description: 'Princípios de design de interfaces e experiência do usuário.'
            }
        ];

        return (
            <section id="education" data-name="education" data-file="components/Experience.js" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Educação & Certificações</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                        <p className="text-gray-600 mt-4">Minha jornada de aprendizado contínuo</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <div key={index} className="fade-in flex items-start mb-8 last:mb-0" style={{ transitionDelay: `${index * 0.2}s` }}>
                                <div className="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                                    <span className="text-purple-600 font-bold text-lg">{edu.year}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{edu.title}</h3>
                                    <h4 className="text-purple-600 font-medium mb-2">{edu.institution}</h4>
                                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Education component error:', error);
        reportError(error);
    }
}
