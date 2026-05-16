import { useState } from 'react';
function App() {
  const[task,setTask]=useState(["wake up","Study react"]);
  const [input, setInput] = useState('');
  function deleteTask(index) {
  setTask(task.filter((t, i) => i !== index));
}
  return(
    <div>
      <h1>My Todo List</h1>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a task"
/>

      <button onClick={() => { setTask([...task, input]); setInput(''); }}>Add Task</button>
  <ul>
  {task.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  ))}

  </ul>

    </div>
  )
}
export default App;