import './App.css';
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState(todos.length + 1)
  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value)
  }
  const handleAddTodo = () => {
    setTodos([...todos, { id: todoId, title: todoTitle }])
    setTodoId(todoId + 1)
    setTodoTitle('')
  }
  // 問題2. 関数に削除対象のtodoが渡っているか確認しよう
  const handleDeleteTodo = (targetTodo) => {
    console.log(targetTodo)
    //ここまで
    // 問題3. 削除ボタンを押した時の処理を書こう
    setTodos(todos.filter((todo) => todo !== targetTodo))

    // ここまで
  }

  return (
    <>
      <div>
        <input
          type="text"
          label="タイトル"
          value={todoTitle}
          onChange={handleAddFormChanges}
        />
        <button onClick={handleAddTodo}>作成</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            {/* 問題1. 削除ボタンを設置しよう */}
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
            {/* ここまで */}
          </li>
        ))}
      </ul>
    </>

  );
}

export default App;
