import React, { useEffect, useState } from 'react'

function UserIP({ address }) {
  const [ipAddress, setIpAddress] = useState("")
  
  useEffect(() => {
    const api = address === "ipv4" ? "api" : "api64"
    const url = `https://${api}.ipify.org?format=json`     
    fetch(url)
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
  }, [])

  return (
    <div>{address === "ipv4"? "Public IPv4 address": "Public IPv6 address" }: {ipAddress}</div>
  )
}

export default UserIP