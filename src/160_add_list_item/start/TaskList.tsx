import React from "react";
import type { Todo } from "./Example";

// propsの型定義
type TaskListProps = {
  todos: Todo[];
};

export const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
