import { useState } from "react"
export function TaskAssignment ({users, tasks, setTasks, setShowElement}){
const [ userInput, setUserInput ] = useState({
    title:'',
    user:'',
    complate: false
})

const handleChange = (obj) =>{
    setUserInput(obj)
} 

const handleSubmit = () =>{
    if(userInput.user !== '' && userInput.user !== "Selecione um usuário" && userInput.title !== '')
    {
        setTasks([...tasks, userInput])

    }
}
const handleClose = ()=>{
    setShowElement(false) 
}
 return(
     <>
    
     <p>Task Assignment</p>
     <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
     <label htmlFor="user">User: </label>
     <select name="user" id="user" defaultValue={userInput.user}
         onChange={ (e)=> {
            handleChange({...userInput, user: e.target.value })
          }} > <option value="Selecionar Usuário"
          >Selecionar Usuário</option>
{users.map((user)=> {
    return   <option  key={user.name} value={user.name}>{user.name}</option>
})}
    </select>

  Title  <input value={userInput.title} 
  onChange={ (e)=> {
    handleChange({...userInput, title: e.target.value })
  }}
  />
  Completa <input type="checkbox" value={userInput.completed}
    onChange={ (e)=> {
        console.log(e.target.checked)
        handleChange({...userInput, completed: e.target.checked })
      }}/>
  <input type="submit" value="adicionar"/>
</form>
<button 
onClick={handleClose}
>Close</button>

     </>
 )   

}