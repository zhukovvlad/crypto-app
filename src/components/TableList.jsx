/* eslint-disable react/prop-types */
import React from 'react';
import RowItem from './RowItem';
import { createArray } from './helpers';

const TableList = ({ data }) => {
  if (data.length === 0) {
    return null;
  }
  const modifiedData = createArray(data);
  // console.log(modifiedData);

  const years = [];
  for (let k = 2011; k <= new Date().getFullYear(); k += 1) {
    years.push(k);
  }
  const renderedList = years.map((year) => {
    const dataByYear = modifiedData.filter((x) => x.year === year);

    return (
      <div key={year} className="thirteen column row">
        <div className="column">{year}</div>
        {dataByYear.map((item) => <RowItem key={item.id} data={item} />)}
      </div>
    );
  });

  return (
    <div
      className="ui grid"
      style={{
        paddingTop: '3rem',
      }}
    >
      <div key="header" className="thirteen column row">
        <div className="column" />
        <div className="column">January</div>
        <div className="column">February</div>
        <div className="column">March</div>
        <div className="column">April</div>
        <div className="column">May</div>
        <div className="column">June</div>
        <div className="column">July</div>
        <div className="column">August</div>
        <div className="column">September</div>
        <div className="column">October</div>
        <div className="column">November</div>
        <div className="column">December</div>
      </div>
      {renderedList}
    </div>
  );
};

export default TableList;
