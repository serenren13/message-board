import { useState, useEffect } from 'react'
import { getMessage } from './api/messages'
import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

export default function App() {
  const [messages, setMessages] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessage()
      setMessages(response.data)
    }
    fetchMessages()
  }, [refresh])

  const triggerRefresh = () => setRefresh(r => !r)

  return (
    <div>
      <h1>Message Board</h1>
      <MessageForm onSuccess={triggerRefresh} />
      <MessageList messages={messages} onSuccess={triggerRefresh} />
    </div>
  )
}