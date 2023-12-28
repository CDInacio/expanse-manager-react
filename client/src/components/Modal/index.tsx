import ptBR from "date-fns/locale/pt-BR";
import moment from "moment";
import "moment/locale/pt-br";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useExpanseStore from "../../state/expanseStore";
import useModalStore from "../../state/modalState";
import { IExpasnse } from "../../types/expanse";
import Button from "../Common/Button";
import Card from "../Common/Card";
import SelectInput from "../Common/SelectInput";
import TextareaInput from "../Common/TextareaInput";
import Textinput from "../Common/Textinput";

moment.locale("pt-br");
registerLocale("ptBR", ptBR);

const CATEGORIES = [
  { _id: "62b8f00e4a4b1a4b5c7e9011", categoria: "Aluguel ou Hipoteca" },
  { _id: "62b8f01e4a4b1a4b5c7e9012", categoria: "Contas de Serviços" },
  { _id: "62b8f02f4a4b1a4b5c7e9013", categoria: "Alimentação" },
  { _id: "62b8f03f4a4b1a4b5c7e9014", categoria: "Transporte" },
  { _id: "62b8f04e4a4b1a4b5c7e9015", categoria: "Saúde" },
  { _id: "62b8f05e4a4b1a4b5c7e9016", categoria: "Educação" },
  { _id: "62b8f06f4a4b1a4b5c7e9017", categoria: "Entretenimento" },
  { _id: "62b8f07e4a4b1a4b5c7e9018", categoria: "Roupas e Acessórios" },
  { _id: "62b8f08f4a4b1a4b5c7e9019", categoria: "Poupança e Investimentos" },
  { _id: "62b8f09e4a4b1a4b5c7e9020", categoria: "Dívidas e Empréstimos" },
  { _id: "62b8f0ae4a4b1a4b5c7e9021", categoria: "Seguros" },
  { _id: "62b8f0be4a4b1a4b5c7e9022", categoria: "Despesas Domésticas" },
  { _id: "62b8f0ce4a4b1a4b5c7e9023", categoria: "Viagens e Férias" },
];

const ExpanseModal = () => {
  const modalState = useModalStore();
  const expanseState = useExpanseStore();

  const [expanse, setExpanse] = useState<IExpasnse>({
    title: "",
    category: "",
    value: 0,
    description: "",
    date: new Date(),
  });

  const handleSubmit = () => {
    expanseState.addExpanse(expanse);
  };

  return (
    <>
      {modalState.isOpen && (
        <div className="w-screen h-screen backdrop-brightness-50 absolute top-0 bottom-0 flex items-center justify-center">
          <Card className="w-[700px] ">
            <h1 className="text-2xl font-bold mb-6">Adicionar despesa</h1>
            <Textinput
              type="text"
              onChange={(e) =>
                setExpanse((prev) => ({ ...prev, title: e.target.value }))
              }
              name="despesa"
              label="Despesa"
              className="w-full mb-5"
            />
            <SelectInput
              onChange={(e) =>
                setExpanse((prev) => ({ ...prev, category: e.target.value }))
              }
              value={expanse.category}
              label="Categoria"
              name="categories"
              data={CATEGORIES}
            />
            <Textinput
              type="number"
              onChange={(e) =>
                setExpanse((prev) => ({
                  ...prev,
                  value: Number(e.target.value),
                }))
              }
              name="value"
              label="Valor"
              className="w-full mb-5"
            />
            <TextareaInput
              onChange={(e) =>
                setExpanse((prev) => ({ ...prev, description: e.target.value }))
              }
              label="Descrição"
              name="description"
            />
            <div className="flex flex-col mt-5 mb-10">
              <span>Vencimento</span>
              <div className="p-2 mt-2 w-fit border-[1px] border-neutral-700 rounded">
                <DatePicker
                  locale="ptBR"
                  selected={expanse.date}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date: any) =>
                    setExpanse((prev) => ({ ...prev, date: date }))
                  }
                />
              </div>
            </div>
            <Button onClick={handleSubmit}>Adicionar</Button>
            <Button
              onClick={modalState.handleModal}
              className="ml-4 bg-red-500 hover:bg-red-600"
            >
              Cancelar
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};

export default ExpanseModal;
