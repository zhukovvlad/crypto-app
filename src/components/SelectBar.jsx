/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Select from 'react-select';
import { createArray } from './helpers';

const months = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' },
];

const years = [];
for (let k = 2011; k <= new Date().getFullYear(); k += 1) {
  years.push({ value: k, label: k });
}

const SelectBar = ({ data }) => {
  // if (data.length === 0) {
  //   return null;
  // }

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2011);

  const handleChangeMonth = (e) => setSelectedMonth(e.value);
  const handleChangeYear = (e) => setSelectedYear(e.value);

  // useEffect(() => {
  //   const ok = (lx) => {
  //     if (lx.length > 0) {
  //       console.log('I am ok');
  //     } else {
  //       console.log('Not ok!');
  //     }
  //   };
  //
  //   ok(createArray(data));
  // }, [data]);

  const modifiedData = createArray(data);

  // console.log(modifiedData);
  // console.log(modifiedData[modifiedData.length - 1]);

  // eslint-disable-next-line max-len
  const start = modifiedData.find((obj) => obj.year === selectedYear && obj.month === selectedMonth);
  const end = modifiedData[modifiedData.length - 1];

  return (
    <div>
      <Select
        placeholder="Select Month..."
        value={months.find((obj) => obj.value === selectedMonth)}
        onChange={handleChangeMonth}
        options={months}
      />
      <Select
        placeholder="Select Year..."
        value={years.find((obj) => obj.value === selectedYear)}
        onChange={handleChangeYear}
        options={years}
      />
      <div>{ start ? start.initialValue : 'Choose another time frame'}</div>
      <div>{ end ? end.initialValue : 'Wait' }</div>
      <div>{ (start && end) ? ((100 / start.initialValue) * end.initialValue).toFixed(0) : 'minute' }</div>
    </div>
  );
};

export default SelectBar;
