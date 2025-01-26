import React, { useEffect, useState } from 'react'
import ShowConvos from '../zustand/showconvos'

const Getmessages = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setmessages, selectedconvo} = ShowConvos()

  useEffect(() => {
    const fetchmessages = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/messages/${selectedconvo._id}`)
        const data = await res.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setmessages(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    if(selectedconvo?._id) {
      fetchmessages()
    }
  }, [selectedconvo?._id, setmessages])

  return { messages, loading }
}

export default Getmessages