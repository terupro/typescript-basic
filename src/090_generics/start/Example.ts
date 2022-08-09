const Example = () => {
  // ジェネリクスとは、型引数を受け取る関数を作る機能のことを指す
  // 型を引数のように扱える

  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }

  const strArr1 = repeatStr("Hello", 3);
  const numArr1 = repeatNum(10, 3);

  // ジェネリクスを使った場合 - アルファベットは自由
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  const strArr2 = repeat<string>("Hello", 3);
  const numArr2 = repeat(10, 3); // 型推論もいける

};

export default Example;
