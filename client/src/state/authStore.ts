import { isAxiosError } from "axios";
import { create } from "zustand";
import { SigninCredentials, SignupCredentials } from "../types/credentials";
import { api } from "../utils/api";

interface IUser {
  name: string;
  email: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
  status: number | null;
  message: string | null;
  signin: (credentials: SigninCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => void;
  initializeUserData: (data: IUser) => Promise<void>;
  clearMessaage: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  isAuthenticated: false,
  user: null,
  status: null,
  message: null,
  signin: async (credentials: SigninCredentials) => {
    try {
      set({ isLoading: true });
      const response = await api.post("user/signin", credentials);
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      set({ isLoading: false, isAuthenticated: true, user: response.data });
    } catch (error) {
      if (isAxiosError(error)) {
        set({
          message: error.response?.data.error,
          isLoading: false,
          isAuthenticated: false,
          user: null,
        });
      }
    }
  },
  signup: async (credentials: SignupCredentials) => {
    try {
      const response = await api.post("user/signup", credentials);
      set({
        isLoading: false,
        status: response.status,
        isAuthenticated: true,
        message: response.data.message,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        set({
          message: error.response?.data.error,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          status: error.status,
        });
      }
    }
  },
  logout: () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    set({ isAuthenticated: false, user: null });
  },
  initializeUserData: async (data: IUser) => {
    set({ user: data, isAuthenticated: true });
  },
  clearMessaage: () => {
    set({ message: null });
  },
}));

export default useAuthStore;
