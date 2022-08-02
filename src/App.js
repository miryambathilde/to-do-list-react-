import logo from './logo.svg';
import './App.css';
import TaskListComponent from "./components/container/task__list";
import ContactList from "./components/container/contact__list";
import UseState from "./components/hooks/useState";
import UseEffect from "./components/hooks/useEffect";
import MiComponenteConContexto from "./components/hooks/useContext";
import Ejemplo from "./components/hooks/ejemplo";
import GreetingStyled from "./components/pure/greetingStyled";
import Father from "./components/container/father";

function App () {
  return (
    <div className="App">
      {/* <header className="App-header"> */ }
      {/* <img src={ logo } className="App-logo" alt="logo" /> */ }
      <p>
        {/* Componente de listado de tareas */ }
        {/* <TaskListComponent></TaskListComponent> */ }
        {/*  <ContactList></ContactList> */ }
        {/* <UseState></UseState> */ }
        {/* <UseEffect></UseEffect> */ }
        {/* <MiComponenteConContexto></MiComponenteConContexto> */ }
        {/* <GreetingStyled name="Miryam"></GreetingStyled> */ }
        {/* todo lo que hay aquí dentro es tradatado como props.children */ }
        {/* <Ejemplo nombre="Miryam">
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo> */}
      </p>
      {/* </header> */ }
      {/* Gestión de eventos */ }
      <Father></Father>
      {/* <TaskListComponent></TaskListComponent> */ }
    </div>
  );
};

export default App;
