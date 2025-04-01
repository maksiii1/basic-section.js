const getGreeting = (userName) => {
  const currentTime = new Date().getHours();
  return currentTime < 10 && currentTime > 6
    ? `Доброе утро, ${userName}`
    : currentTime < 17
    ? `Добрый день, ${userName}`
    : currentTime > 17 && currentTime <= 23
    ? `Добрый вечер, ${userName}`
    : currentTime < 6
    ? `Доброй ночи, ${userName}`
    : "Неопределено";
};

const name = "Simon";
console.log(getGreeting(name));
