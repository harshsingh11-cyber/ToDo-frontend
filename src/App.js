import './App.css';
import Todo from './componente/Todo';
import { useEffect, useState } from 'react';
import { addToDo, getAllTodo, Updating, deleteToDo } from './utils/HandleApi';

function App() {


  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  function updateMode(_id, text) {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
      <div className='heading'>
        <button alt="ToDo - Application">
          <i>T</i>
          <i>o</i>
          <i>D</i>
          <i>o</i>
          <i>&nbsp;</i>
          <i>A</i>
          <i>P</i>
          <i>P</i>
          <i>s</i>
        </button>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Add Todos.." value={text} onChange={(e) => setText(e.target.value)} />

          <button className="button"
            onClick={isUpdating ? () => Updating(toDoId, text, setToDo, setText, setIsUpdating) : () => addToDo(text, setText, setToDo)}>
            {
              isUpdating ? "update" : "Add"
            }

          </button>
        </div>
        <div className="list">

          {
            toDo.map((item) => < Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteMode={() => deleteToDo(item._id, setToDo)} />)
          }

        </div>
      </div>

    </div>
  );
}

export default App;


