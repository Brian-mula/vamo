const AUTH_TOKEN = 'AUTH_TOKEN';


export type DecodedToken = {
  id?: string,
  username?: string,
};



export const addAuthTokenLS = (token: string): void => {
  try {
    localStorage.setItem(AUTH_TOKEN, token);
  } catch {
    // ignore error
  }
};
export const getAuthTokenLS = (): string | null => localStorage.getItem(AUTH_TOKEN);
export const removeAuthTokenLS = (): void => localStorage.removeItem(AUTH_TOKEN);
