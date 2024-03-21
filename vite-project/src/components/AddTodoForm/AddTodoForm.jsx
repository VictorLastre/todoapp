import { useState } from 'react';
import useTodoStore from '../../store/todoStore'


const AddTodoForm = () => {
    const [text, setText] = useState('')
    const addTodo = useTodoStore(state=>state.addTodo)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        addTodo(text)
        setText('')
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between p-2'>
        <input 
            type='text' 
            value={text} 
            className='flex-1 p-2 border rounded' 
            onChange={(e) => setText(e.target.value)}    
            placeholder='Add new todo'
        />
        <button 
            type='submit'
            className=''
        >
            Add
        </button>
    </form>
  )
}

export default AddTodoForm