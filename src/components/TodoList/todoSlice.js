// const initState = [
//   { id: 1, name: "Learn React", completed: false, priority: "High" },
//   { id: 2, name: "Learn Vue", completed: true, priority: "Medium" },
//   { id: 3, name: "Learn AngularJS", completed: false, priority: "Low" },
// ];

// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoReducer;

import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
  name: 'todoList',
  initialState:  [
      { id: 1, name: "Learn React", completed: false, priority: "High" },
      { id: 2, name: "Learn Vue", completed: true, priority: "Medium" },
      { id: 3, name: "Learn AngularJS", completed: false, priority: "Low" },
    ],
    reducers: {
      addTodo: (state,action) =>{
        state.push(action.payload);
      },//action creators
      toggleTodoStatus: (state,action) =>{
        const currentTodo = state.find(todo => todo.id === action.payload)
        if(currentTodo){
          console.log(currentTodo)
          currentTodo.completed = !currentTodo.completed
        }
        
      }
    }
})