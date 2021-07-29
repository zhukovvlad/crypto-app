const createArray = (data) => {
  /* Сначала создаем массив arr, в котором выделяем только те данные,
   которые относятся к первому и последнему дню месяца */

  // eslint-disable-next-line no-unused-vars
  const arr = Object.entries(data).filter(([k, v]) => {
    if (new Date(k).getDate() === 1) {
      return true;
    }
    if (new Date(k).getDate() === new Date(
      new Date(k).getFullYear(),
      new Date(k).getMonth() + 1, 0,
    ).getDate()) {
      return true;
    }
    return false;
  }).map(
    ([k, v]) => (
      {
        Year: new Date(k).getFullYear(),
        Month: new Date(k).getMonth(),
        Day: new Date(k).getDate(),
        Value: v,
      }
    ),
  );

  const finalArray = [];
  for (let i = 2011; i <= new Date().getFullYear(); i += 1) {
    const yearArray = arr.filter((obj) => obj.Year === i);
    for (let k = 0; k <= 11; k += 1) {
      const monthArray = yearArray.filter((obj) => obj.Month === k);
      if (monthArray.length === 2) {
        finalArray.push({
          id: `${k}-${i}`,
          year: i,
          month: k,
          initialValue: monthArray[0].Value,
          finalValue: monthArray[1].Value,
          change: +((monthArray[1].Value / monthArray[0].Value - 1) * 100).toFixed(2),
        });
      } else if (monthArray.length === 1) {
        finalArray.push({
          id: `${k}-${i}`,
          year: i,
          month: k,
          initialValue: monthArray[0].Value,
          finalValue: data[`${new Date().getFullYear()}-${Month()}-${DayBefore()}`],
          change: +((data[`${new Date().getFullYear()}-${Month()}-${DayBefore()}`] / monthArray[0].Value - 1) * 100).toFixed(2),
        });
      }
    }
  }
  return finalArray;
};

const Month = () => {
  const date = new Date();

  if (date.getMonth() + 1 < 10) {
    const fullMonth = `0${(date.getMonth() + 1).toString()}`;
    return fullMonth;
  }

  return date.getMonth().toString();
};

const Day = () => {
  const date = new Date();

  if (date.getDate() < 10) {
    return `0${date.getDate().toString()}`;
  }

  return date.getDate().toString();
};

const DayBefore = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  if (date.getDate() < 10) {
    return `0${date.getDate().toString()}`;
  }

  return date.getDate().toString();
};

export {
  createArray, Month, Day, DayBefore,
};
