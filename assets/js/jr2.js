// Bellow, a second possible Junior's code:

setInterval(function () {
  const date = new Date();
  const weekDay = date.getDay();
  const monthIndex = date.getMonth();

  function getWeekDayText(weekDay) {
    const weekDayText = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
    return weekDayText[weekDay];
  }

  function getMonthDayText(monthIndex) {
    const monthIndexText = ['janeiro','fevereiro','março','abril','maio','junho',
    'julho','agosto','setembro','outubro','novembro','dezembro'];
    return monthIndexText[monthIndex];
  }

  function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function dateFormatterDay(date) {
    const yearActual = date.getFullYear();
    const dayInMonth = date.getDate();
    const weekDayText = getWeekDayText(weekDay);
    const monthIndexText = getMonthDayText(monthIndex);

    return `${weekDayText}, ${dayInMonth} de ${monthIndexText} de ${yearActual} `;
  }

  function hourFormatterDay(date) {
    const hour = leftZero(date.getHours());
    const min = leftZero(date.getMinutes());
    const sec = leftZero(date.getSeconds());

    return `${hour}:${min}:${sec}`;
  }

  function dateFormatterTotal() {
    return dateFormatterDay(date) + hourFormatterDay(date);
  }

  document.getElementById('result2').textContent = dateFormatterTotal();
}, 1000)
