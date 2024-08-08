/*switch(вираз) {
    case значення1 :
        Якщо значенння дорівнює значення1 , то виконаємо цей код
        breake;
    case значення2
    Якщо значенння дорівнює значення2 , то виконаємо цей код
        breake;
        додаткові кейси

        default:
            Код виконується якщо жодне з попередніх значень не підішло

} */

let day = 16;
let dayName;

switch (day) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  case 4:
    dayName = "Чт";
    break;
  case 5:
    dayName = "ПТ";
    break;
  case 6:
    dayName = "СБ";
    break;
  case 7:
    dayName = "ВС";
    break;
  default:
    dayName = "Невідомий день";
}
console.log(dayName)