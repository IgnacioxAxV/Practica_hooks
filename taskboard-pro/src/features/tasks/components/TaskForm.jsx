import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

const Input = HTML_TAGS.INPUT
const Button = HTML_TAGS.BUTTON

export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  return (
    <div>
      <Input
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />
      <Button onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</Button>
    </div>
  )
}
