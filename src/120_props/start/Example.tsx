import Hello, { Btn } from "./Hello";

// propsの形定義

const Example: React.FC = () => {
  return (
    <>
      <Hello text="TypeScript">Children</Hello>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
    </>
  );
};

export default Example;
