import React from 'react';
import Shop from './components/Shop';

const App = () => {
  return (
    <div>
      <Shop />
    </div>
  );
};

export default App;


































// import './App.css'
// import { v4 as uuidv4, v4 } from 'uuid';
// import { useState } from 'react'
// function App() {
//   const [newItem, setNewItem] = useState("")
//   const [todos, setTodos] = useState([])
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setTodos(currentTodos => {
//       return [
//         ...currentTodos,
//         { id: uuidv4(), title: newItem, completed: false }
//       ]
//     })
// setNewItem("")
//   }
// function toogleTodo(id,completed){
// setTodos(currentTodos=>{
//   return currentTodos.map(todo=>{
//     if(todo.id===id){
//       return{...todo,completed}
//     }
//     return todo
//   })
// })
// }

// function deleteTodo(id){
// setTodos(currentTodos=>{
//   return currentTodos.filter(todo =>todo.id!==id)
// })
// }
//   console.log(todos);
//   return (
//     <>
//       <form className='new-item-form' onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="item">New Item</label>  <br />
//           <input type="text" value={newItem} id="item" onChange={e => setNewItem(e.target.value)} />
//         </div>
//         <button className='btn btn-success'>Add</button>
//       </form>
//       <h1 className='header'>Todo list </h1>
//       <ul className='list'>
//         {todos.length ===0 && "NoTodos"}
//         {todos.map(todo => {
//           return(
//             <li key={todo.id}>
//             <label>
//               <input type="checkbox" checked={todo.completed} onChange={e=>toogleTodo(todo.id,e.target.checked)}/>
//               {todo.title}
//             </label>
//             <button onClick={()=>{deleteTodo(todo.id)}} className='btn btn-outline-danger'>Delete</button>
//           </li>
//           )
//         })}

//       </ul>
//     </>
//   )
// }

// export default App
