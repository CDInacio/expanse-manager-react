import useAuthStore from "../../state/authStore";
import useModalStore from "../../state/modalState";

const MENU = [
  { id: 1, text: "Categorias", path: "/categories" },
  { id: 2, text: "Balanço", path: "/categories" },
];

const Navbar = () => {
  const state = useAuthStore();
  const modalState = useModalStore();

  return (
    <nav className="bg-primary h-[60px] w-screen flex items-center text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="h-9 w-9  cursor-pointer text-white rounded-full bg-primaryDark flex items-center justify-center">
            {state.user?.name.slice(0, 1)}
          </span>
          <ul className="flex">
            {MENU.map((item) => (
              <li key={item.id} className="mx-2">
                {item.text}
              </li>
            ))}
          </ul>
          <span onClick={state.logout}>Sair</span>
        </div>
        <span className="cursor-pointer" onClick={modalState.handleModal}>
          Adicionar
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
