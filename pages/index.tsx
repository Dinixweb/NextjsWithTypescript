import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import { Todo } from '../interfaces/todo'
import { useState } from 'react'
const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTask = () => {
    console.log(todo,"clicked")
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Type script demo app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main taskHome">
        <h2 className='text-primary fs-2 mt-5'>TAASK</h2>
       <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
     </div>
    </div>
  )
}

export default Home
