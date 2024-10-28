import React from "react";

// this is just related to components, nothing new or extra

interface TodoItemProps {
  todo: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <li>{todo}</li>;
};

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
