import React from "react";

// propsの型を定義する
type HelloProps = {
  text: string;
  children: React.ReactNode;
};

const Hello: React.FC<HelloProps> = (props) => {
  return (
    <h1>
      {props.text} ! {props.children}
    </h1>
  );
};

type FnProps = {
  fn: (text: string) => void; // void = 戻り値なし
};

export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn("TypeScript")}>ボタン</button>;
};

export default Hello;
