import { useState } from "react";

const initialTask = {
  title: "",
  user: "",
  complate: false,
  userId: ""
};

export function TaskAssignment({ users, tasks, setTasks, setShowElement }) {
  const [task, setTask] = useState(initialTask);

  const handleChange = (obj) => {
    setTask(obj);
  };

  const handleChangeName = (name) => {
    const id = users.find((user) => user.name === name).id;

    setTask((prev) => {
      return {
        ...prev,
        user: name,
        userId: id
      };
    });
  };

  const handleSubmit = () => {
    if (
      task.user !== "" &&
      task.user !== "Selecione um usuário" &&
      task.title !== ""
    ) {
      setTasks([...tasks, task]);
    }
  };

  const handleClose = () => {
    setShowElement(false);
  };

  return (
    <>
      <p>Task Assignment</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="user">User: </label>
        <select
          name="user"
          id="user"
          defaultValue={task.user}
          onChange={(e) => {
            handleChangeName(e.target.value);
          }}
        >
          {" "}
          <option value="Selecionar Usuário">Selecionar Usuário</option>
          {users.map(({ name, id }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        Title{" "}
        <input
          value={task.title}
          onChange={(e) => {
            handleChange({ ...task, title: e.target.value });
          }}
        />
        Completa{" "}
        <input
          type="checkbox"
          value={task.completed}
          onChange={(e) => {
            handleChange({ ...task, completed: e.target.checked });
          }}
        />
        <input type="submit" value="adicionar" />
      </form>
      <button onClick={handleClose}>Close</button>
    </>
  );
}
