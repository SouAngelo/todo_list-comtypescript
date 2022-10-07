import React, { useRef, useState } from 'react'

// interface

import {ITask} from '../interfaces/Task'

// css

import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask):void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {



  return (
   <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <p className='task'>{task.title}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
            </div>
           
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
   </>
  )
}

export default TaskList