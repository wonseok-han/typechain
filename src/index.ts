const name = "test",
  age = 29,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): void => {
  console.log("name::", name);
  console.log("age::", age);
  console.log("gender::", gender);
};

sayHi(name, age);

export {};
