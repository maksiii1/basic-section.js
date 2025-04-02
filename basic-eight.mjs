import { ageProgress } from "./basic-seven.mjs";

const dataMessage = (userName, age) => {
  age <= 17
    ? console.log(`${userName} have ${age} year old and he ребенок`)
    : age <= 30
    ? console.log(`${userName} have ${age} year old and he молодой`)
    : age <= 60
    ? console.log(`${userName} have ${age} year old and he зрелый`)
    : age > 60
    ? console.log(`${userName} have ${age} year old and he старый`)
    : console.log("Неопределено");

  ageProgress(age);
};

const name = "Simon";
const age = 17;

dataMessage(name, age);
