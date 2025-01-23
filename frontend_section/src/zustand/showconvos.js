import { create } from "zustand";

const ShowConvos = create((set) => ({
    selectedconvo: null,
    setselectedconvo: (selectedconvo) => set({ selectedconvo }),
    messages: [],
    setmessages: (messages) => set({ messages }),
}));

export default ShowConvos;