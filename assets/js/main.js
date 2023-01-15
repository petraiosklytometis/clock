//Bellow, a Junior's code:
//
// setInterval(function () {
//   const date = new Date();
//   const weekDay = date.getDay();
//   const monthIndex = date.getMonth();

//   function getWeekDayText(weekDay) {
//     let weekDayText;
//     switch (weekDay) {
//       case 0:
//         weekDayText = "domingo";
//         return weekDayText;
//       case 1:
//         weekDayText = "segunda-feira";
//         return weekDayText;
//       case 2:
//         weekDayText = "terça-feira";
//         return weekDayText;
//       case 3:
//         weekDayText = "quarta-feira";
//         return weekDayText;
//       case 4:
//         weekDayText = "quinta-feira";
//         return weekDayText;
//       case 5:
//         weekDayText = "sexta-feira";
//         return weekDayText;
//       case 6:
//         weekDayText = "sábado";
//         return weekDayText;
//       default:
//         weekDayText = "";
//         return weekDayText;
//     }
//   }

//   function getMonthDayText(monthIndex) {
//     let monthIndexText;
//     switch (monthIndex) {
//       case 0:
//         monthIndexText = "janeiro";
//         return monthIndexText;
//       case 1:
//         monthIndexText = "fevereiro";
//         return monthIndexText;
//       case 2:
//         monthIndexText = "março";
//         return monthIndexText;
//       case 3:
//         monthIndexText = "abril";
//         return monthIndexText;
//       case 4:
//         monthIndexText = "maio";
//         return monthIndexText;
//       case 5:
//         monthIndexText = "junho";
//         return monthIndexText;
//       case 6:
//         monthIndexText = "julho";
//         return monthIndexText;
//       case 7:
//         monthIndexText = 'agosto';
//         return monthIndexText;
//       case 8:
//         monthIndexText = 'setembro';
//         return monthIndexText;
//       case 9:
//         monthIndexText = 'outubro';
//         return monthIndexText;
//       case 10:
//         monthIndexText = 'novembro';
//         return monthIndexText;
//       case 11:
//         monthIndexText = 'dezembro';
//         return monthIndexText;
//       default:
//         monthIndexText = "";
//         return monthIndexText;
//     }
//   }

//   function leftZero(num) {
//     return num >= 10 ? num : `0${num}`;
//   }

//   function dateFormatterDay(date) {
//     const yearActual = date.getFullYear();
//     const dayInMonth = date.getDate();
//     const weekDayText = getWeekDayText(weekDay);
//     const monthIndexText = getMonthDayText(monthIndex);

//     return `${weekDayText}, ${dayInMonth} de ${monthIndexText} de ${yearActual} `;
//   }

//   function hourFormatterDay(date) {
//     const hour = leftZero(date.getHours());
//     const min = leftZero(date.getMinutes());
//     const sec = leftZero(date.getSeconds());

//     return `${hour}:${min}:${sec}`;
//   }

//   function dateFormatterTotal() {
//     return dateFormatterDay(date) + hourFormatterDay(date);
//   }

//   document.getElementById('result').textContent = dateFormatterTotal();
// }, 1000)

// Bellow, a Senior's code:
setInterval(function(){
const h1 = document.querySelector('.container h1'); 
const date = new Date();
const option = {
  dateStyle: 'full',
  timeStyle: 'medium'
};

h1.innerHTML = date.toLocaleString('pt-BR', option);
}, 1000)