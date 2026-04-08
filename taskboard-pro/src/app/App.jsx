import AppProviders from './providers/AppProviders'
import TaskBoard from '../features/tasks/components/TaskBoard'
import './styles/index.css'

function App() {
  return (
    <AppProviders>
      <TaskBoard />
    </AppProviders>
  )
}

export default App
