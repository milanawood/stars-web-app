import { create } from 'zustand'

interface NavState {
    isNavOpen: boolean;
    toggleNav: () => void;
}

export const useNavStore = create<NavState>((set) => ({
    isNavOpen: false,
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));