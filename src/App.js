import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";
import ToDoEdit from "./components/ToDoEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/" element= {<ToDoList/>} />
          <Route path="/add" element= {<ToDoAdd/>} />
          <Route path="/edit/:id" element= {<ToDoEdit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
