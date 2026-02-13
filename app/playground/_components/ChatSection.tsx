import React from 'react'
import { Messages } from '../[projectid]/page'
type Props = {
    messages: Messages[]
}
function ChatSection({messages}:Props) {
  return (
    <div className='w-96 shadow h-[91vh] p-4'>ChatSection</div>
  )
}

export default ChatSection