const AuthUtils = {
    isAuthenticated: () => {
        try {
            return localStorage.getItem('isAuthenticated') === 'true';
        } catch (error) {
            console.error('Auth check error:', error);
            return false;
        }
    },

    getCurrentUser: () => {
        try {
            const email = localStorage.getItem('userEmail');
            const name = localStorage.getItem('userName');
            return { email, name };
        } catch (error) {
            console.error('Get user error:', error);
            return null;
        }
    },

    login: (email, name = '') => {
        try {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            if (name) {
                localStorage.setItem('userName', name);
            }
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    },

    logout: () => {
        try {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            return true;
        } catch (error) {
            console.error('Logout error:', error);
            return false;
        }
    },

    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    validatePhone: (phone) => {
        const phoneRegex = /^\+244\s?\d{3}\s?\d{3}\s?\d{3}$/;
        return phoneRegex.test(phone);
    },

    hashPassword: (password) => {
        return btoa(password);
    },

    verifyPassword: (password, hash) => {
        return btoa(password) === hash;
    }
};
