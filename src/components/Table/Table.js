/* eslint-disable jsx-a11y/alt-text */
import './table.css'

const Table = ({tasks, users, filterValue, setTasks}) => {
  const deleteItem = (arr)=> {
    setTasks(arr)
  }
return(
  
<>
<table style={{width: '600px'}}>
  <thead>
  <tr>
    <th>Usario</th>
    <th>Titulo</th>
    <th>Completa</th>
    <th>Excluir</th>
  </tr>
  </thead>
  <tbody>
  {tasks.filter((task)=>{
    return(
      task.title.includes(filterValue) 
    )
  }).map( (task, index)=> {
    return(
      <tr key={`${task.title + index}`} >
        <td>User {task.userId}</td>
        <td>{task.title}</td>
        <td>{ task.completed ? "Sim" : "Não"}</td>
        <td><img src='./images/trash.svg' 
        onClick={() => {
          deleteItem(tasks.filter((value, filterIndex)=>{
            return(index !== filterIndex)
          }))
        }}
        /></td>
      </tr>
    )
})}
</tbody>
</table>

</>);    

} 
export default Table;