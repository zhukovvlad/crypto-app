/* eslint-disable react/prop-types */
import React from 'react';

const RowItem = ({ data }) => (
  <div
    className="column"
    style={{
      backgroundColor: data.change >= 0 ? '#92d36e' : '#f2711c',
      border: '1px solid #1b1c1d',
      paddingTop: '0.1rem',
      paddingBottom: '0.1rem',
    }}
  >
    {data.change}
    %
  </div>
);

export default RowItem;
