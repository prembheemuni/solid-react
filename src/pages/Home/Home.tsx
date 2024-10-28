import Todos from "../../features/Todos/Todos";

function Home() {
  const renderHome = () => {
    return (
      <>
        <Todos />
      </>
    );
  };

  return <>{renderHome()}</>;
}

export default Home;
