import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Code',
        day: 'March 8th at 4:20pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Read',
        day: 'March 8th at 6:20pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Workout',
        day: 'March 8th at 8:20pm',
        reminder: false,
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
