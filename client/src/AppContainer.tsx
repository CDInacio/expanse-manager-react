import { useEffect } from "react";
import App from "./App";
import useAuthStore from "./state/authStore";

const AppContainer = () => {
  const state = useAuthStore();
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    if (userData) {
      state.initializeUserData(JSON.parse(userData));
    }
  }, [userData]);

  return (
    <div>
      <App />
    </div>
  );
};

export default AppContainer;
