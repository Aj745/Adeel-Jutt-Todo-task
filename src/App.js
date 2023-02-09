
import './App.css';
import { AddTodo } from './MyComponent/AddTodo';
import Todos from './MyComponent/Todos';
import React, { useState } from 'react';


function App() {

  
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos,] = useState(initTodo);
  const onDelete = (todo) => {
    console.log("i am onDelete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }
  const addTodo = (title, description) => {
    console.log("i am Adding Todo", title, description);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  
  return (


    
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
       



  );
}

export default App;
