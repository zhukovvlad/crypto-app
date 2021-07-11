import axios from 'axios';
import { Month, Day } from '../components/helpers';

export default axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/historical',
  params: {
    start: '2011-01-01',
    end: `${new Date().getFullYear()}-${Month()}-${Day()}`,
  },
});
