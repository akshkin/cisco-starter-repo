import React, { useEffect, useState } from 'react'
import { w3cwebsocket } from "websocket" 

function PacketLatency() {
  const [latency, setLatency] = useState("") 
  
  useEffect(() => {
    const client = new w3cwebsocket("ws://localhost:55455/ws") 
    
    client.onerror = () => {
      console.log("Connection error")
    }
    client.onmessage = (message) => {
      setLatency(new Date().getTime() - message.data)
    }

  }, [])

  
  return (
    <div>
      {latency}
    </div>
  )
}

export default PacketLatency