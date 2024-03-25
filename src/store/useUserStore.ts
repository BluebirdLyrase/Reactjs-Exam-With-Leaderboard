import { create } from "zustand";

type UserState = {
  user: string;
  setUser: (user: string) => void;
};

export const useUserStore = create<UserState>()((set) => {
  return {
    user: "",
    setUser: (user) => {
      console.log("user:", user);
      return set(() => ({ user }));
    },
  };
});
