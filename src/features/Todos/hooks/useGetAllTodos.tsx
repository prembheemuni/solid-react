import { useEffect, useState } from "react";
import { getAllTodoTitles } from "../todoService";

export const useGetAllTodos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [titles, setTitles] = useState<any>([]);

  useEffect(() => {
    const getTodoTitles = async () => {
      setLoading(true);
      try {
        const data = await getAllTodoTitles();
        setTitles(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getTodoTitles();
  }, []);

  return { loading, error, titles };
};
