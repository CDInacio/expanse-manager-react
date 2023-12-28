import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Common/Card";
import useAuthStore from "../../state/authStore";
import { SigninCredentials } from "../../types/credentials";
import SigninForm from "./SigninForm";

const Signin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  const state = useAuthStore();
  const handleSubmitForm = (credentials: SigninCredentials) => {
    state.signin(credentials);
  };

  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center">
      <Card className="w-[400px]  rounded ">
        <p className=" text-red-600 text-center mb-4">
          {state.message && state.message}
        </p>
        <SigninForm onSubmit={handleSubmitForm} />
      </Card>
    </div>
  );
};

export default Signin;
