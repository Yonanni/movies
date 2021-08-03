
import './App.css';
import SingleMovie from './component/SingleMovie';
import "bootstrap/dist/css/bootstrap.min.css"
import TopNav from './component/TopNav';
import { Component, useState } from 'react';


// function App() {
//   const [search, setSearch] = useState("")
//   // state = {
//   //   search: ""
//   // }
//   const handleSearch = (text) => {
//     setSearch(text)
//   }
//   // render () {
//   return (
//     <div className="App">
//       <TopNav searching={handleSearch} search={search}/>
//       <SingleMovie name="batman" search={search} />
//       <SingleMovie name="avengers" search={search} />
//     </div>
//   );
// // }
// }

// export default App;

class App extends Component {
 
  state = {
    search: ""
  }
   handleSearch = (text) => {
    this.setState({
      search: text
    })
  }
  
  render () {
  return (
    <div className="App">
      <TopNav searching={this.handleSearch} search={this.state.search}/>
      <SingleMovie name="batman" search={this.state.search} />
      <SingleMovie name="avengers" search={this.state.search} />
    </div>
  );
}
}

export default App;