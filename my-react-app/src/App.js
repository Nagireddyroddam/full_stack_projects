import { useState } from 'react';
function App() {
  const[task,setTask]=useState(["wake up","Study react"]);
  const [input, setInput] = useState('');
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
      {task.map((task,index)=>(
      <li key={index}>{task}</li>
    ))}
    </ul>

    </div>
  )
}
export default App;