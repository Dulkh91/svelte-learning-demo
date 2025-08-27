import { writable } from "svelte/store";

interface Auth {
  user: string | null;
  isAuthenticated: boolean;
  token: string | null;
}

// export const auth = writable<Auth>({
//     user: null,
//     isAuthenticated: false,
//     token: null
// })

// ✅ Load from localStorage first
const saved = localStorage.getItem("auth");
const initail: Auth = saved
  ? JSON.parse(saved)
  : { user: null, isAuthenticated: false, token: null };

// ✅ Subscribe once → auto save
export const auth = writable<Auth>(initail);

// --- Actions ---
type Props = {
  userData: string;
  token: string;
};
export const login = ({ userData, token }: Props) => {
  auth.set({
    user: userData,
    isAuthenticated: true,
    token: token,
  });
};

export const logout = () => {
  auth.set({
    user: null,
    isAuthenticated: false,
    token: null,
  });
};
