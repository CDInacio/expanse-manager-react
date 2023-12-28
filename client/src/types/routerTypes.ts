interface routerType {
  path: string;
  element: JSX.Element;
}

export interface routersType {
  path: string;
  element: JSX.Element;
  children?: routerType[];
}
