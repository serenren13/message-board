import { useState } from 'react'
import { postMessage } from '../api/messages'

export default function MessageForm({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    if (!username || !message) return
    await postMessage(username, message)
    setUsername("")
    setMessage("")
    onSuccess()
  }

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}