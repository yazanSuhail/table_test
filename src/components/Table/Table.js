/* eslint-disable jsx-a11y/alt-text */
import "./table.css";
const trashcan = "./images/trash.svg";

const Table = ({ tasks, filterValue, setTasks }) => {
  const handleDelete = (id) => {
    const newTasks = tasks.filter((value) => value.id !== id);

    setTasks(newTasks);
  };

  return (
    <>
      <table style={{ width: "600px" }}>
        <thead>
          <tr>
            <th>Usario</th>
            <th>Titulo</th>
            <th>Completa</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            .filter((task) => {
              return task.title.includes(filterValue);
            })
            .map((task, i) => {
              return (
                <tr key={`${task.id}-${i}`}>
                  <td>User {task.userId}</td>
                  <td>{task.title}</td>
                  <td>{task.completed ? "Sim" : "Não"}</td>
                  <td>
                    <img src={trashcan} onClick={() => handleDelete(task.id)} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
