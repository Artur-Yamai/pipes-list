const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const createID = () => {
  let ID = ''
  for (let i = 0; i < 36; i++) {
    switch (i) {
      case 8:
        ID+='-';
        break;
      case 13:
        ID+='-';
        break;
      case 18:
      ID+='-';
      break;
      case 23:
        ID+='-';
        break;
      default: 
        ID += ABC[Math.floor(Math.random() * 62)];
    }
  }

  return ID
}

// ф-ия проверяет, наступила ли указанная дата
const existingDate = (date) => {
  if (date === '') return false

  // переводим внесенную дату в массив, чтобы проще было перебирать числа
  date = date.split('-');

  let nowYear = new Date().getFullYear();
  let nowMonth = new Date().getMonth() + 1;
  let nowDay = new Date().getDate();

  return +date[0] < nowYear ? true : 
            +date[0] === nowYear && +date[1] < nowMonth ? true :
                +date [0] === nowYear && +date[1] === nowMonth && +date[2] <= nowDay ? true : false

}

export default {
  createID, 
  existingDate
}