import { create } from "zustand";
import { IExpasnse } from "../types/expanse";
import { privateRequest } from "../utils/api";

interface ExpanseState {
  expanses: IExpasnse[];
  addExpanse: (expanse: IExpasnse) => Promise<void>;
  getExpanses: () => Promise<void>;
  getExpanse: () => Promise<void>;
}

const useExpanseStore = create<ExpanseState>((set) => ({
  expanses: [],
  addExpanse: async (expanse: IExpasnse) => {
    privateRequest
      .post("/expanse/create", expanse)
      .then((response) => console.log(response));
  },
  getExpanses: async () => {
    privateRequest.get("/expanse/getAll").then((response) => {
      console.log(response);
    });
  },
  getExpanse: async () => {
    privateRequest.get("/expanse/get").then((response) => {
      console.log(response);
    });
  },
}));

export default useExpanseStore;
