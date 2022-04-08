const tasks = [
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
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks