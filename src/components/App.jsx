import React from 'react';
/* import SearchBar from './SearchBar'; */
import coindesk from '../apis/coindesk';
import TableList from './TableList';
import { createArray } from './helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices: [] };
  }

  componentDidMount() {
    coindesk.get('/close.json').then((response) => {
      this.setState({
        prices: createArray(response.data.bpi),
      });
    });
  }

  /*  onTermSubmit = async term => {
      const response = await coindesk.get('/close.json');
      console.log(response.data.bpi);
      this.setState({
          prices: createArray(response.data.bpi)
      });
      console.log(this.state.prices);
  }; */

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
        <TableList dates={prices} />
      </div>
    );
  }
}

export default App;
