import React from "react";

const Example = () => {
  /// ユニオン型(複数の方を組み合わせて「型T or 型U」のような「または」の意味を表せる)
  let strOrNum: string | number = "Hello";
  strOrNum = 123;

  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = true;

  let helloOrNumOrBool: "Hello" | number | boolean = "Hello";

  // typeを使用することで独自の型を作成できる
  type HelloOrNum = "Hello" | number;
  const hello: HelloOrNum = "Hello";

  // 例えばこんな感じ
  type DayOfWeek = "Monday" | "Tuesday";
  const day: DayOfWeek = "Monday";
};

export default Example;
