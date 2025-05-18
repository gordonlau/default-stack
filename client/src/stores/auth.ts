import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login() {
        set({ isAuthenticated: true });
        return true;
    },
}));
