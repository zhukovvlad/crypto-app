/* eslint-disable react/prop-types */
import React from 'react';
import RowItem from './RowItem';

const TableList = ({ dates }) => {
  if (dates.length === 0) {
    return null;
  }
  const years = [];
  for (let k = 2011; k <= new Date().getFullYear(); k += 1) {
    years.push(k);
  }
  const renderedList = years.map((year) => {
    const data = dates.filter((x) => x.year === year);
    return (
      <div className="thirteen column row">
        <div className="column">{year}</div>
        {data.map((item) => <RowItem data={item} />)}
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
      <div className="thirteen column row">
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
