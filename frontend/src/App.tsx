import { useState, useEffect } from 'react'
import { getMessage, postMessage, updateMessage, deleteMessage } from './api/messages'

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessage()
      setMessages(response.data)
    }
    fetchMessages()
  }, [])

  console.log(messages)

  return (
    <div>
      <h1>Message Board</h1>
    </div>
  )
}