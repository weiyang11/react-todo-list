import { useState } from "react";
import { v4 as uuid } from "uuid"; // Import the v4 function as uuid

function NewTaskForm({ setTasks }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTaskTitle) {
      const task = {
        id: uuid(),
        title: newTaskTitle,
        status: "pending",
      };

      setTasks((prev) => [...prev, task]); // Add the new task to the tasks array
      setNewTaskTitle("");
    }
  };

  return (
    <div className="my-5">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border"
          placeholder="Add new task.."
          value={newTaskTitle}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Create"
          className="bg-blue-200 py-1 px-2 rounded border border-blue-500 absolute right-2 top-1/2 -translate-y-1/2"
        />
      </form>
    </div>
  );
}

export default NewTaskForm;
