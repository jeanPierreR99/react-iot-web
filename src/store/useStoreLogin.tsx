import { create } from 'zustand';

interface ILogin {
    isActive: boolean;
    setIsActive: () => void;
}

const useStoreLogin = create<ILogin>((set) => ({
    isActive: false,
    setIsActive: () => set((state) => ({ isActive: !state.isActive }))
}));

export default useStoreLogin;
