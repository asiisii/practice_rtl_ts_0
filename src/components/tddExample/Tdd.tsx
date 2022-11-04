import React from 'react'

interface TddProps {
  name?: String
}

const Tdd = ({ name }: TddProps) => {
  return (
    <div>Hello, {name}</div>
  )
}

export default Tdd