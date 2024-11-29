import { create } from 'zustand';

interface ISidebar {
    active: boolean;
    setActive: () => void;
}

const useStoreSidebar = create<ISidebar>((set) => ({
    active: true,
    setActive: () => set((state) => ({ active: !state.active }))
}));

export default useStoreSidebar;
