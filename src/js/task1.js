// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

import {task1Btn} from './refs';

task1Btn.addEventListener('click', onClickBtn1);

const delay = ms => {
  return new Promise( (resolve) => {
      setTimeout(() => {
          resolve(ms)
      },ms)
  }

  )
};

const logger = time => console.log(`Resolved after ${time}ms`);

function onClickBtn1 () {
    console.clear();
    delay(2000).then(logger); // Resolved after 2000ms
    delay(1000).then(logger); // Resolved after 1000ms
    delay(1500).then(logger); // Resolved after 1500ms
    delay(5000).then(logger); // Resolved after 5000ms
}