import React,{ useState } from 'react'
import ShowConvos from '../zustand/showconvos'
import toast from 'react-hot-toast'

const Sendmessages = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setmessages, selectedconvo} = ShowConvos()

  const sendmessage = async (message) => {
    setLoading(true)
    try {
        const res = await fetch(`/api/messages/send/${selectedconvo._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        const data = await res.json()
        if (data.error) {
            throw new Error(data.error)
        }
        setmessages([...messages, data])
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
  }

  return { loading, sendmessage }
}

export default Sendmessages