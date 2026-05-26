import { useState } from 'react'
import { updateMessage, deleteMessage } from '../api/messages'

export default function MessageItem({ id, username, message, onSuccess }: { id: string, username: string, message: string, onSuccess: () => void }) {
  const [editing, setEditing] = useState(false)
  const [updatedMessage, setUpdatedMessage] = useState(message)

  const handleUpdate = async () => {
    await updateMessage(id, updatedMessage)
    setEditing(false)
    onSuccess()
  }

  const handleDelete = async () => {
    await deleteMessage(id)
    onSuccess()
  }

  return (
    <div>
      <strong>{username}</strong>
      {editing ? (
        <>
          <input value={updatedMessage} onChange={(e) => setUpdatedMessage(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>{message}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  )
}