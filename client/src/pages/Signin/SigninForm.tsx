import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import Spacer from "../../components/Common/Spacer";
import Textinput from "../../components/Common/Textinput";
import useAuthStore from "../../state/authStore";
import { SigninCredentials } from "../../types/credentials";

interface SigninFormProps {
  onSubmit: (credentials: SigninCredentials) => void;
}

const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const state = useAuthStore();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleNavigate = () => {
    navigate("/signup");
  };

  const handleSubmit = () => {
    if (!credentials.email || !credentials.password) {
      return;
    }
    onSubmit(credentials);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex flex-col mt-6">
        <Textinput
          name="email"
          label="Email"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          // placeholder="Email"
        />
        <Spacer space="my-2" />
        <Textinput
          name="password"
          label="Senha"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          // placeholder="Senha"
        />
        <Spacer space="my-2" />
        <Button
          onClick={handleSubmit}
          type="submit"
          className={`${state.isLoading && "bg-primaryLight"} `}
        >
          Entrar
        </Button>
        <Spacer space="mb-2" />
        <p className="text-neutral-300 text-sm">
          Não possui uma conta?{" "}
          <span
            onClick={handleNavigate}
            className="text-purple-700 font-bold cursor-pointer "
          >
            Cadastre-se aqui
          </span>
        </p>
      </div>
    </>
  );
};

export default SigninForm;
