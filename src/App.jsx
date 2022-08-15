import "./App.scss";
import data from "./data/data";
import Employee from "./components/Employee/Employee"

const App = () => {
  return (
    <div className="app">
    <header>Ticket Tracker</header>
    <div className="card">
    <Employee data={data}/>
    </div>
    </div>
  )
}

export default App;
