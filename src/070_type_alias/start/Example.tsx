const Example = () => {
  // 型エイリアス(type文を用いて型に別名を付けること)
  // パスカルケースで記述する(単語の先頭大文字)
  type User = {
    name: string;
    age: number;
  };
  const user: User = { name: "Teru", age: 20 };

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "Hana",
    age: 20,
    gender: "woman",
  };
};

export default Example;
