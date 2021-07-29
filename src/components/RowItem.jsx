/* eslint-disable react/prop-types */
import React from 'react';
import './RowItem.css';

const RowItem = ({ data }) => (
  <div
    className={data.change >= 0 ? 'column common green-cell' : 'column common red-cell'}
  >
    {data.change}
    %
  </div>
);

export default RowItem;
