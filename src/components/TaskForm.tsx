import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

// css
import styles from "./TaskForm.module.css"

//interface
import {ITask} from "../interfaces/Task"


interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch <React.SetStateAction <ITask[]> >
  task?: ITask | null
  handleUpdate?(id: number, title: string): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

   const [id, setId] = useState <number> (0)
   const [title, setTitle] = useState <string> ('')

   useEffect(() =>{
    
    if(task){
      setId(task.id)
      setTitle(task.title)
    }

   }, [task])

   const addTaskHandler = (e: FormEvent <HTMLFormElement>) => {

        e.preventDefault()

        if(handleUpdate){
          handleUpdate(id, title)

        } else if(title === ''){
          alert('DIGITE ALGUMA COISA!')

        } else {

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title}

        setTaskList!([...taskList, newTask])

        setTitle('')
       
        }
        
   }
   
   const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
     if(e.target.name === 'title'){
       setTitle(e.target.value)
     } 
     
   }

  return (
   <form onSubmit={addTaskHandler} className={styles.form}>
     <div className={styles.input_container}>
       <label htmlFor="title">Título</label>
       <input type="text" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title} />
     </div>

     <input type="submit" value={btnText} />
   </form>
  )
}

export default TaskForm