import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const InputRef = useRef([])

  const handleAddTodo = () => {
    const text = InputRef.current.value;
    const newItem  = { completed: false, text };
    setTodos([...todos, newItem]);
    InputRef.current.value = '';
    console.log(text)
  };

  const handleItemDone = (e) => {
    const text = e.target.innerText;
    console.log(text)
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  return (
    <div className="App">
      <h2> CookFolio </h2>
      <div className='to-do-container'>
      <ul>
      {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
              </div>
            );
          })}
      </ul>

      </div>
      
      <input ref={InputRef} placeholder='Enter item ...'/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
