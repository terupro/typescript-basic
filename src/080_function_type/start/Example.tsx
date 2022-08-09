const Example = () => {
  // 関数の形定義
  // TSは引数に必ず型を定義する必要がある
  // 戻り値は型推論されるからどっちでも

  function sum1(x?: number, y: number = 1) {
    return y;
  }
  const result1 = sum1();
  console.log(result1);

  const sum2 = (x: number, y: number = 1): number => x + y;
  const result2 = sum1(10, 20);
  console.log(result2);

  // 関数の型エイリアスも作成できる
  // 関数を作成する際に型を定義しなくてもよくなる
  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
};

export default Example;
