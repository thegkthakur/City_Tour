import React,{Component} from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import TourList from './components/TourList'

// function App() {
//   return (
//     <div className="App">
//      <h3>
//        <TourList/>
//      </h3>
//     </div>
//   );
// }


class App extends Component{
  render(){
    return(
      <main>
        <Navbar/>
        <TourList/>
      </main>
    )
  }
}
export default App;
