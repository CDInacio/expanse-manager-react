import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import Spacer from "../../components/Common/Spacer";
import Textinput from "../../components/Common/Textinput";
import { SignupCredentials } from "../../types/credentials";

interface SignupFormProps {
  onSubmit: (credentials: SignupCredentials) => void;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNavigate = () => {
    navigate("/signin");
  };

  const handleSubmit = () => {
    if (!credentials.name || !credentials.email || !credentials.password) {
      return;
    }
    onSubmit(credentials);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Cadastro</h1>
      <div className="flex flex-col mt-6">
        <Textinput
          name="name"
          label="Nome"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          // placeholder="Nome"
        />
        <Spacer space="my-2" />
        <Textinput
          name="email"
          label="Email"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
          type="email"
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
        <Button type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>

        <p className="text-neutral-300 mt-2 text-sm">
          Já possui uma conta?{" "}
          <span
            onClick={handleNavigate}
            className="text-purple-700 font-bold cursor-pointer"
          >
            Entre aqui
          </span>
        </p>
      </div>
    </>
  );
};

export default SignupForm;
