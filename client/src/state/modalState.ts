import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  handleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  handleModal: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));

export default useModalStore;
