import MessageItem from './MessageItem'

export default function MessageList({ messages, onSuccess }: { messages: any[], onSuccess: () => void }) {
  return (
    <div>
      {messages.map((msg) => (
        <MessageItem key={msg.id} id={msg.id} username={msg.username} message={msg.message} onSuccess={onSuccess} />
      ))}
    </div>
  )
}