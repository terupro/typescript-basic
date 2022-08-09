const Example = () => {
  /// プリミティブ(TypeScriptが扱うことのできる基本的な値のこと)
  // 文字列
  let str: string = "Hello";

  // 数値
  let num: number = 102;

  // 巨大な数値 (numberで処理しきれない大きな数値)
  let bignum: bigint = 103n;

  // 真偽値
  let bool: boolean = true;

  // null値
  let nullish: null = null;
  let undefinedValue: undefined = undefined;

  // リテラル型 (特定の値)
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: "Hello" = "Hello";
};

export default Example;
