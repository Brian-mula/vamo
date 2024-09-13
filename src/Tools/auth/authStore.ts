import create from 'zustand';


/**
 * Types
 */
export type User = {
  id: string,
  name: string,
};
export type AuthStore = {
  token: string | null,
  user: User | null,
  setAuthStore: (token: string | null, user?: User | null) => void,
  setToken: (token: string | null) => void,
  setUser: (user?: User | null) => void,
  removeUser: () => void,
};



/**
 * Store
 */
export const useAuthStore = create<AuthStore>((set) => ({
  // state
  token: null,
  user: null,

  // methods
  setAuthStore: (token, user = null) => set({
    token,
    user,
  }),

  setToken: (token) => set({
    token,
  }),

  setUser: (user = null) => set({
    user,
  }),

  removeUser: () => set({
    user: null,
  }),
}));
