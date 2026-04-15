import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

const Section = HTML_TAGS.SECTION
const H3 = HTML_TAGS.H3
const P = HTML_TAGS.P
const Ul = HTML_TAGS.UL
const Li = HTML_TAGS.LI

export function TaskList({ tasks }) {
  return (
    <Section>
      <H3>{TASK_UI_TEXT.LIST_TITLE}</H3>

      {tasks.length === 0 ? (
        <P>{TASK_UI_TEXT.EMPTY_MESSAGE}</P>
      ) : (
        <Ul>
          {tasks.map((task) => (
            <Li key={task.id}>{task.title}</Li>
          ))}
        </Ul>
      )}
    </Section>
  )
}