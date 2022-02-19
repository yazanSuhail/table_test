import  {useState, useEffect, } from 'react'
import axios from 'axios';
import Table from './components/Table/Table';
import { Filter } from './components/Filter/Filter';
import { TaskAssignment } from './components/TaskAssignment/TaskAssignment';
import './App.css' 

function App() {
  const [tasks, setTasks ] = useState([])
  const [users, setUsers] = useState([])
  const [ filterValue, setFilterValue ] = useState ("")
  const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos"
  const USERS_API_URL = "https://jsonplaceholder.typicode.com/users"
  const [ showElement, setShowElement ] = useState(false)

  const getTasks = async ()=> {

    axios.get(TODOS_API_URL)
    .then((response) => {
      setTasks(response.data);
    }, (error) => {
      console.log(error);
    });
  }

  const getUers = async ()=> {
    axios.get(USERS_API_URL)
    .then((response) => {
      setUsers(response.data);
      console.log(users)

    }, (error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getTasks()
    getUers()
  },[])

  return (
    <>
   
    
   <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
   <Table tasks={tasks} users={users} filterValue={filterValue} setTasks={setTasks}/>
   <button 
    onClick={  ()=>{
      setShowElement((prev) => !prev)

  }}
    >
    Nova Tarefa
    </button>
    <div
    className={showElement ? '' : 'hidden'}
    >
      {console.log(showElement, "hello")}
      
      <TaskAssignment users={users} tasks={tasks} setTasks={setTasks} setShowElement={setShowElement}/>
    </div>

    </>
  );
}

export default App;
