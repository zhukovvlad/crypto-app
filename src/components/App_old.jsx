import React from 'react';
/* import SearchBar from './SearchBar'; */
import coindesk from '../apis/coindesk';
import TableList from './TableList';
import SelectBar from './SelectBar';
// import { createArray } from './helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices: [] };
  }

  componentDidMount() {
    coindesk.get('/close.json').then((response) => {
      this.setState({
        prices: response.data.bpi,
      });
    });
  }

  render() {
    const { prices } = this.state;
    return (
      <div className="ui container">
        <h1
          className="ui center aligned huge header"
          style={{
            marginTop: '3rem',
          }}
        >
          Change bitcoin price as a percentage by months
        </h1>
        {/* <SearchBar onFormSubmit={this.onTermSubmit} /> */}
        <SelectBar data={prices} />
        <TableList data={prices} />
      </div>
    );
  }
}

export default App;
