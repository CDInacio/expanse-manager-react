import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import useAuthStore from "../../state/authStore";
import { SignupCredentials } from "../../types/credentials";
import SignupForm from "./SignupForm";

const Signup = () => {
  const navigate = useNavigate();
  const state = useAuthStore();
  const handleSubmitForm = useCallback((credentials: SignupCredentials) => {
    state.signup(credentials);
  }, []);

  useEffect(() => {
    if (state.status === 200) {
      setTimeout(() => {
        state.clearMessaage();
        navigate("/signin");
      }, 2000);
    }
  }, [state.status]);

  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center">
      <Card className="w-[400px]  rounded ">
        <p
          className={`${
            state.status === 200 ? "text-lime-600" : "text-red-600"
          } mb-4 text-center`}
        >
          {state.message}
        </p>
        <SignupForm onSubmit={handleSubmitForm} />
      </Card>
    </div>
  );
};

export default Signup;
