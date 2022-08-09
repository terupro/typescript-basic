const Example = () => {
  // 型推論
  // - 関数内で収まるものは使ってもよし
  let str = "Hello";
  let obj = { name: "Teru", age: 20 };

  // constにするとリテラル型として推論される
  const bye = "Bye";
};

export default Example;
