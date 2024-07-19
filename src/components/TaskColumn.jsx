// TaskColumn.js

import Task from "./Tasks";

function TaskColumn({ label, color, tasks, setTasks }) {
  return (
    <div className="w-1/3">
      <div className={`bg-${color}-100 mx-2 p-3 border rounded h-full`}>
        <h2
          className={`font-medium text-xl border-b border-${color}-500 pb-1 mb-2`}
        >
          {label}
        </h2>
        <div className="p2">
          {tasks.length
            ? tasks.map((task) => <Task task={task} setTasks={setTasks} />)
            : " No tasks"}
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;
