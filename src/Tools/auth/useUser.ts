import {
  AuthStore,
  useAuthStore,
  User,
} from './authStore';


// selector
const selectorUser = (state: AuthStore) => state.user;


export const useUser = (): User | null => useAuthStore(selectorUser);
