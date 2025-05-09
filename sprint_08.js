// iTGid.info - курс JS24/2


// Task 01
// По нажатию кнопки запускается функция, которая создает пустой set и возвращает его. 

const t01 = () => {
  const justSet = new Set();
  return justSet
}

document.querySelector('.b-1').addEventListener('click', () => {
  console.log(t01());
});


// Task 02
// По нажатию кнопки запускается функция, которая получает значение из input.i-2 и добавляет его в set st_02. Выводит set в консоль.

const st_02 = new Set();

const t02 = () => {
  const i2 = document.querySelector('input.i-2');
  st_02.add(i2.value);
  console.log(st_02);
}

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// По нажатию кнопки запускается функция, которая получает значение из input.i-3 и проверяет его наличие в st_03. Результат проверки выводится .out-3.


const st_03 = new Set(['Wade', 'James', 'Ogden', 'Daito']);

const t03 = () => {
  // const i3 = document.querySelector('input.i-3');
  // const out3 = document.querySelector('.out-3');
  // const stArr = [...st_03];
  // const result = stArr.includes(i3.value);
  // out3.textContent = result;
  //или
  const i3 = document.querySelector('input.i-3');
  const out3 = document.querySelector('.out-3');
  const result2 = st_03.has(i3.value);
  out3.textContent = result2;
}

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Напишите функцию, которая по нажатию кнопки получает значение из .s-4 и удаляет его в Set st_04. После чего выводит элементы st_04 в .out-4 через пробел. 

const st_04 = new Set(['Samantha', 'Wade', 'Daito', 'Sho']);

const t04 = () => {
  const s4 = document.querySelector('.s-4');
  const out4 = document.querySelector('.out-4');
  if (st_04.has(s4.value)) {
    st_04.delete(s4.value);
    out4.textContent = s4.value;
  }
  else {
    out4.textContent = 'не обнаружено';
  }
  console.log(st_04);
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Напишите функцию, которая очищает st_05 и выводит в консоль.


const st_05 = new Set(['Atari 2600', 'Atari 5200', 'Atari 7800', 'Atari ST']);

const t05 = () => {
  st_05.clear();
  console.log(st_05);
}

document.querySelector('.b-5').addEventListener('click', t05);



// Task 06
// Напишите функцию, которая изменяет Set st_06, распаковывая массив внутри set. Т.е. внутри set лежит массив  {[1,2,3]}. Здесь фигурные скобки - символизируют set. После запуска функции set должен изменится и выглядеть таким: {1, 2, 3}. Функция выводит set в консоль.

let st_06 = new Set();
st_06.add([1, 2, 3]);

const t06 = () => {
  const arr = [...st_06];
  console.log(arr);

}

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Напишите функцию, которая изменяет Set st_07, распаковывая массив внутри set. Т.е. внутри set лежит массив  {[1,2,3], [4, 5, 6]}. Здесь фигурные скобки - символизируют set. После запуска функции set должен изменится и выглядеть таким: {1, 2, 3, 4, 5, 6}. Функция выводит set в консоль.

let st_07 = new Set();
st_07.add([1, 2, 3]);
st_07.add([4, 5, 6]);


const t07 = () => {
  const newSet = new Set();

  for (let item of st_07) {
    for (let num of item) {
      newSet.add(num);
    }
  }

  st_07 = newSet;
  console.log(st_07);
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Напишите функцию, которая выводит значения из set st_08 по возрастанию в .out-8. Разделитель элементов - пробел. Попробуйте решить задачу в одну или две строки.

let st_08 = new Set([22, 19, 16, 13, 10, 7]);

const t08 = () => {
  const out8 = document.querySelector('.out-8');
  const arr = [...st_08];
  out8.textContent = arr.reverse();
}

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Напишите функцию, которая выводит в .out-9 только четные значения из st_09. Разделитель элементов - пробел.

let st_09 = new Set([22, 19, 16, 13, 10, 7]);

const t09 = () => {
  const out9 = document.querySelector('.out-9');
  let result = [];
  st_09.forEach((item) => {
    if (item % 2 === 0) {
      result += item + ' ';
    }
  })
  out9.textContent = result;
}

document.querySelector('.b-9').addEventListener('click', t09);



// Task 10
// Напишите функцию, которая на основе st_10 создает новый set с нечетными элементами из st_10 и возвращает его.

let st_10 = new Set([22, 19, 16, 13, 10, 7]);

const t10 = () => {
  let newSet = new Set();
  st_10.forEach((item) => {
    if (item % 2 !== 0) {
      newSet.add(item);
    }
  })
  return newSet;
}

document.querySelector('.b-10').addEventListener('click', () => {
  document.querySelector('.out-10').textContent = [...t10()].join(' ');
});


// Task 11
// Напишите функцию, которая делает union наборов a с набором b. Функция должна возвращать созданный set.

let a = new Set([111, 222, 333, 444]);
let b = new Set([777, 555, 333, 444]);

const t11 = () => {
  const unionSet = a.union(b);
  return unionSet;
}

document.querySelector('.b-11').addEventListener('click', () => {
  console.log(t11());
});

// Task 12
// Напишите функцию, которая делает difference наборов a с набором b. Функция должна возвращать созданный set.

const t12 = () => {
  const differenceSet = a.difference(b);
  return differenceSet;
}

document.querySelector('.b-12').addEventListener('click', () => {
  console.log(t12());
});

// Task 13
// Напишите функцию, которая делает intersection наборов a с набором b. Функция должна возвращать созданный set.

const t13 = () => {
  const intersectionSet = a.intersection(b);
  return intersectionSet;
}

document.querySelector('.b-13').addEventListener('click', () => {
  console.log(t13());
});

// Task 14
// Напишите функцию, которая делает symmetricDifference наборов a с набором b. Функция должна возвращать созданный set.

const t14 = () => {
  const symmetricDifferenceSet = a.symmetricDifference(b);
  return symmetricDifferenceSet;
}

document.querySelector('.b-14').addEventListener('click', () => {
  console.log(t14());
});

// Task 15
// Напишите функцию, которая удаляет в set st_15 все значения больше 10. Возвращает st_15.

let st_15 = new Set([1, 2, -4, 5, 10, 3, 12, 14, 15, 7, 7]);

const t15 = () => {
  st_15.forEach((item) => {
    if (item > 10) {
      st_15.delete(item);
    }
  })
  return st_15;
}

document.querySelector('.b-15').addEventListener('click', () => {
  console.log(t15());
});

// Task 16
// Напишите функцию, которая берет пароль pass_16 и возвращает true, если в рамках строки пароля символы уникальные (не повторяются) и false в обратном случае.

let pass_16 = 'Кром строг, силен и вечен';

const t16 = () => {
  const passSet = new Set(pass_16);
  return pass_16.length === passSet.size;
}

document.querySelector('.b-16').addEventListener('click', () => {
  console.log(t16());
});

// Task 17
// Напишите функцию, возвращает массив значений, которые одинаковы для двух массивов (farr_17, barr_17).
// В примере ниже ожидается массив [1, 2] или [2, 1]

let farr_17 = [1, 2, 3, 4];
let barr_17 = [9, 8, 7, 2, 1];


const t17 = () => {

  const s1 = new Set(farr_17);
  const s2 = new Set(barr_17);
  const arr = s1.intersection(s2);
  const result = [...arr];
  return result;
}

document.querySelector('.b-17').addEventListener('click', () => {
  document.querySelector('.out-17').textContent = t17().join(' ');
});


// Task 18
// Напишите функцию, возвращает массив значений, которые есть в массиве farr_18 и нет в массиве barr_18. 
// Ожидаю [3, 4] или [4, 3]

let farr_18 = [1, 2, 3, 4];
let barr_18 = [9, 8, 7, 2, 1];


const t18 = () => {
  const s1 = new Set(farr_18);
  const s2 = new Set(barr_18);
  const arr = s1.difference(s2);
  const result = [...arr];
  return result;
}

document.querySelector('.b-18').addEventListener('click', () => {
  document.querySelector('.out-18').textContent = t18().join(' ');
});


// Task 19
// Напишите функцию, возвращает массив значений, которые не общие, для двух массивов.
// Ожидаю [3, 4, 9, 8, 7] 


let farr_19 = [1, 2, 3, 4];
let barr_19 = [9, 8, 7, 2, 1];


const t19 = () => {
  const s1 = new Set(farr_19);
  const s2 = new Set(barr_19);
  const arr = s1.symmetricDifference(s2);
  const result = [...arr];
  return result;
}

document.querySelector('.b-19').addEventListener('click', () => {
  document.querySelector('.out-19').textContent = t19().join(' ');
});


// Task 20
// Напишите функцию, которая проверяет что элементы массива farr_20 содержатся в массиве barr_20. Функция возвращает true, false.

let farr_20 = [1, 2];
let barr_20 = [9, 8, 7, 2, 1];


const t20 = () => {
  const setB = new Set(barr_20);

  for (let item of farr_20) {
    if (!setB.has(item)) {
      return false;
    }
  }

  return true;
}

document.querySelector('.b-20').addEventListener('click', () => {
  document.querySelector('.out-20').textContent = t20();
});