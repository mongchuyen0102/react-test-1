import "./App.scss";
import "./reset.css";
import Header from "./component/header/Header.js";
import { createContext, useState  } from "react";
import UserForm from "./component/body/UserForm";

export const selectContext = createContext();
const App = () => {
  const [selected, setSelected] = useState("NodeJs");
  const [search,setSearch] = useState("");
  return (
    <selectContext.Provider value={{selected,setSelected,search,setSearch}}>
      <div className="App">
        <Header/>
        <UserForm/>
      </div>
    </selectContext.Provider>
  );
};

export default App;
