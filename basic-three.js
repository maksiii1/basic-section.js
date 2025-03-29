const showGender = (gender) => {
  return gender === "M"
    ? "Your gender is male"
    : gender === "F"
    ? "Your gender is female"
    : "Your gender is not defined";
};

let testGenderOne = "M";
let testGenderTwo = "F";
let testGenderThree = "";

console.log(showGender(testGenderOne));
console.log(showGender(testGenderTwo));
console.log(showGender(testGenderThree));
