export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder="Nueva tarea..."
      />
      <button onClick={onAddTask}>Agregar</button>
    </div>
  )
}
