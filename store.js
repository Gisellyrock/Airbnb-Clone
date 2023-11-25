import { create } from 'zustand';

const initialState = {
  location: '',
  dates: [new Date(), new Date()],
  guests: 0,
};

const useSearchBearStore = create((set) => ({
  location: '',
  dates: [new Date(), new Date()],
  guests: 0,
  increaseGuests: () => set((state) => ({ guests: state.guests + 1 })),
  decreaseGuests: () => set((state) => ({ guests: state.guests - 1 })),
  removeAllFilters: () => set({ bears: 0 }),
}));
