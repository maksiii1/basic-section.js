const ageProgress = () => {
  for (let i = 0; i <= 100; i++) {
    i <= 17
      ? console.log(`${i} - ребенок`)
      : i <= 30
      ? console.log(`${i} - молодой`)
      : i <= 60
      ? console.log(`${i} - зрелый`)
      : i > 60
      ? console.log(`${i} - старый`)
      : console.log("Неопределено");
  }
};

ageProgress();

export { ageProgress };
