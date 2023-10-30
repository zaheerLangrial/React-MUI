import { Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Notes() {
  const [serverData , setServerData] = useState([])

  useEffect(() => {
    dataGetForObjLength()
}, [])
const dataGetForObjLength = async () => {
    const res = await axios.get('http://localhost:3000/Notes')
    setServerData(res.data)
    console.log(res.data)
}
  return (
    <div>
      <ul>
        {
          serverData.map((item) => {
            <li key={item.id}>
              {item.email}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Notes