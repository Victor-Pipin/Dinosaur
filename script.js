// Получаю Динозаврика из DOM
const dino = document.getElementById("dino");
// Получаю Кактус из DOM
const cactus = document.getElementById("cactus");

//Функция прыжка
function jump() {
  //Проверка находится ли Динозаврик в прыжке
  if (dino.classList != "jump") {
    // Добавляю класс jump для начала анимации прыжка
    dino.classList.add("jump");

    // Удаляю класс jump через 300ms чтобы завершить прыжок
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

// Добавляю обработчик события при нажатии на пробел
document.addEventListener("keydown", function (event) {
  // проверяю, была ли нажата клавиша пробела
  if (event.key === " ") {
    // Если пробел нажат, вызываю функцию jump()
    jump();
  }
});

// Устанавливаю интервал для проверки состояния игры каждые 10 мс
let isAlive = setInterval(function() {
  // Получаю текущую y-позицию динозаврика
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

  // Получаю текущую x-позицию кактуса
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
  console.log(cactusLeft)

  // Проверяю условия столкновения:
  // кактус находится в пределах 50 пикселей от динозаврика по оси x,
  // кактус ещё не прошёл динозаврика, и динозаврик не прыгнул высоко
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
     // Если произошло столкновение, вывожу сообщение
    alert("More?")
  }
}, 100)