import {
  FaCheck,
  FaHourglass,
  FaPencilAlt,
  FaTimesCircle,
} from "react-icons/fa";

function Task({ label, color, tasks, setTasks }) {
  const updateStatus = (taskId, status) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === taskId) {
          task.status = status;
        }

        return task;
      });
    });
  };

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
            ? tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-2 mb-1 bg-white border flex items-center justify-between relative group"
                >
                  {task.title}

                  <div className="flex items-center">
                    {task.status !== "pending" && (
                      <FaHourglass
                        onClick={() => updateStatus(task.id, "pending")}
                        className="mx-1 hover:cursor-pointer"
                      />
                    )}

                    {task.status !== "doing" && (
                      <FaPencilAlt
                        onClick={() => updateStatus(task.id, "doing")}
                        className="mx-1 hover:cursor-pointer"
                      />
                    )}

                    {task.status !== "done" && (
                      <FaCheck
                        onClick={() => updateStatus(task.id, "done")}
                        className="mx-1 hover:cursor-pointer"
                      />
                    )}
                  </div>

                  <FaTimesCircle className="absolute text-red-500 -top-1 -right-1 opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:scale-110 transition" />
                </div>
              ))
            : " No tasks"}
        </div>
      </div>
    </div>
  );
}

export default Task;
