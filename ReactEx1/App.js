/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import  store  from './src/redux/store';

import Counter from './src/Counter';
 
export default function App() {
  return (

    <Provider store= {store} >
      <Counter />
    </Provider>
  );
}
