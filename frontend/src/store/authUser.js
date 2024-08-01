import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isSigningUp: false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingIn: false,
    isLoggedIn: !!JSON.parse(localStorage.getItem('user')),
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post("http://localhost:5000/api/v1/auth/signup", credentials);
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            set({ user, isSigningUp: false, isLoggedIn: true });
            toast.success("Account created successfully");
        } catch (error) {
            toast.error(error.response.data.message || "Signup failed");
            set({ isSigningUp: false });
        }
    },
    login: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const response = await axios.post("http://localhost:5000/api/v1/auth/login", credentials);
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            set({ user, isLoggingIn: false, isLoggedIn: true });
            toast.success("Logged in successfully");
        } catch (error) {
            set({ isLoggingIn: false });
            toast.error(error.response.data.message || "Login failed");
        }
    },
    logout: async () => {
        set({ isLoggingOut: true });
        try {
            await axios.post("http://localhost:5000/api/v1/auth/logout");
            localStorage.removeItem('user');
            set({ user: null, isLoggingOut: false, isLoggedIn: false });
            toast.success("Logged out successfully");
        } catch (error) {
            set({ isLoggingOut: false });
            toast.error(error.response.data.message || "Logout failed");
        }
    },
}));
