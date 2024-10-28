import constants from "../utils/constants";
import Axios from "./axios";

export const getAllTodos = async () => {
  try {
    const todos = await Axios.get(constants.todosApi);
    return todos;
  } catch (error) {
    return error;
  }
};
