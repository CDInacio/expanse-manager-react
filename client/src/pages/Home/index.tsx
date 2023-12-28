import { useEffect } from "react";
import ExpanseModal from "../../components/Modal";
import useExpanseStore from "../../state/expanseStore";

const Home = () => {
  const state = useExpanseStore();

  useEffect(() => {
    state.getExpanse();
  }, []);
  return (
    <main>
      <ExpanseModal />
      <div className="container mx-auto">fsd</div>
    </main>
  );
};

export default Home;
