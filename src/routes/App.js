//import VerticalTabs from '../containers/Home'
import { BrowserRouter, Route } from 'react-router-dom';
//import { Switch } from '@material-ui/core';
import Home from '../containers/Home'

const App = () => (
  <BrowserRouter>
      <Route exact path='/' component={Home} />
	</BrowserRouter>

);
  // return (
  //   <div className="App">
  //     {VerticalTabs()}
  //   </div>
  // );


export default App;
