const Example = () => {
  /// 配列とオブジェクトの形定義

  // 配列の場合
  const arr1: number[] = [1, 2, 3];
  const arr2: string[] = ["Hello", "Hell", "Hel"];
  const arr3: Array<number> = [1, 2, 3];
  // ⬇︎同じ意味
  const arr4: (string | number)[] = ["Hello", 1];
  const arr5: Array<string | number> = ["Hello", 1];

  // オブジェクトの場合
  type Person = { name: string; age?: number };
  const obj1: Person = { name: "Teru", age: 20 };
  // ⬇︎同じ意味
  const users1: { name: string; age?: number }[] = [
    { name: "Teru", age: 20 },
    { name: "Yumi", age: 22 },
  ];

  // 配列とオブジェクトを組み合わせる場合
  const users2: Person[] = [
    { name: "Teru", age: 20 },
    { name: "Yumi", age: 22 },
  ];
};

export default Example;
