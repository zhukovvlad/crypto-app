import React, { useState, useEffect } from 'react';
import coindesk from '../apis/coindesk';
import TableList from './TableList';
// import SelectBar from './SelectBar';

const App = () => {
  const [data, setData] = useState({ prices: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await coindesk.get('/close.json');

        setData(result.data.bpi);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="ui container">
      <h1
        className="ui center aligned huge header"
        style={{
          marginTop: '3rem',
        }}
      >
        Bitcoin monthly returns
      </h1>

      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* <SelectBar data={data} /> */}
          <TableList data={data} />
        </>
      )}
    </main>
  );
};

export default App;
