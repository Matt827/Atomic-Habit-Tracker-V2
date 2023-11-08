import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
    const navigate = useNavigate()
    useEffect(() => navigate("/habits"), [])
    
  return (
    <div></div>
  )
}

export default Navigate