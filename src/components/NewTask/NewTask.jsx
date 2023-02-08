import { useState } from "react";


const NewTask = (props) => {
  const [form, setForm] = useState({
    note: '',
    taskName: '',
    date: '',
    time: ''
  })
  const [visible, setVisible] = useState(false)
  const btnStyle = {width: '70px', height: '50px'}
  const handleToggle = () => {
    setVisible(!visible)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTask(form)
    setVisible(false)
    setForm({
      note: '',
      taskName: '',
      date: '',
      time: ''
    })
  }

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  console.log(form);
  
  return (
    <section>
      <header style={{display: 'flex'}}>
        <h2>New Task</h2>
        <button style={btnStyle} onClick={handleToggle}>
          Show
        </button>
      </header>
      {visible && 
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='taskName'
            value={form.taskName}
            onChange={handleChange} 
            required  
          />
          <input 
            name='note' 
            type='text' 
            value={form.note} 
            onChange={handleChange}
            required
          />
          <input 
            type='date' 
            name='date' 
            value={form.date} 
            onChange={handleChange}
          />
          <input 
            type="text" 
            name='time' 
            value={form.time} 
            onChange={handleChange}
          />
          <button type='submit'>Add Task</button>
        </form>
       
      }
    </section>
  )
}

export default NewTask