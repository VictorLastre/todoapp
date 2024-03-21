
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import useTodoStore from './../../store/todoStore.js'


const TodoItem = ({todo}) => {
  const { removeTodo, toggleTodo } = useTodoStore();
  const variants = {
    initial: {opacity:0, y:50},
    animate: {opacity:1, y:0}
  }

  return (
    <motion.li variants={variants}
      initial="initial"
      animate="animate"
      className={`flex items-center p-2`}
      layout
    >
      <input 
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className='form-checkbox h-5 w-5'
      />
      <span
        className={`flex-1 ml-2 ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className='px-2 py-1 bg-red-500 text-white rounded'>
        Delete
      </button>
    </motion.li>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  };

export default TodoItem;