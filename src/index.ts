class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

interface PersonProps {
  name: string;
  age: number;
  gender: string;
}
const name = "test",
  age = 29,
  gender = "male";

const person: PersonProps = {
  name,
  age,
  gender,
};

const sayHi = (name: string, age: number, gender?: string): void => {
  console.log("this function is sayHi!!");
  console.log("name::", name);
  console.log("age::", age);
  console.log("gender::", gender);
};

const giveMeObject = ({ name, age, gender }: PersonProps) => {
  console.log("this function is giveMeObject!!");
  console.log("name::", name);
  console.log("age::", age);
  console.log("gender::", gender);
};

// sayHi(name, age);
// giveMeObject(person);
const human = new Human(name, age, gender);
console.log(giveMeObject(human));

export {};
