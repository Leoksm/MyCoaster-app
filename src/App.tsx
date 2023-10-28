import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRouter from './navigation/NavigationRouter';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationRouter />  
    </NavigationContainer>
  );
}
export default App;
