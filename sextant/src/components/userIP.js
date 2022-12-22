import React, { useEffect, useState } from 'react'

function UserIP({ address }) {
  const [ipAddress, setIpAddress] = useState("")
  const api = address === "ipv4" ? "api" : "api64"
  const url = `https://${api}.ipify.org?format=json` 
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
  }, [])

  return (
    <div>{address === "ipv4"? "User's IPv4": "User's IPv6" }: {ipAddress}</div>
  )
}

export default UserIP