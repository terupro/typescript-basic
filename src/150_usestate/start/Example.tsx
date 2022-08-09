import { useState } from "react";

type User = {
  name: string;
  age: number;
};

type Todo = {
  id: number;
  text: string;
};

// useStateの型定義
// 文字列とかは型推論でも良いが、オブジェクトや配列は型を指定しよう
const Example = () => {
  const [text, setText] = useState("Hello");
  const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
  const [users, setUsers] = useState<User[]>([{ name: "Tom", age: 22 }]);
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: "Homework" }]);
};

export default Example;
