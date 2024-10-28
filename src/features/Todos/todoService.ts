import { getAllTodos } from "../../lib/api/todos";

export const getAllTodoTitles = async () => {
  try {
    let todo: any = await getAllTodos();
    todo = todo.data.map((each: any) => each.title);
    return todo;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error fetching todo", data: error };
  }
};
