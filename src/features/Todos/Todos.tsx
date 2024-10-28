import TodoList from "../../components/TodosList/TodosList";
import { useGetAllTodos } from "./hooks/useGetAllTodos";

const Todos = () => {
  const { loading, error, titles } = useGetAllTodos();

  // this functions can be handy if we want to put loaders for a particular section
  // here we can only apply loader or error to todos list
  const renderTodos = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1>Error</h1>;
    }

    return <TodoList todos={titles} />;
  };
  return <>{renderTodos()}</>;
};

export default Todos;
