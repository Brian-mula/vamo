import {
  AuthStore,
  useAuthStore,
  User,
} from './authStore';


// selector
const selectorToken = (state: AuthStore) => state.token;


export const useToken = (): string | null => useAuthStore(selectorToken);
