import React, {useState, useRef } from 'react'

const Gomy = () => {
    const [text, setText] = useState('')
    const textRef = useRef()

    const changeText = () => {
        setText(textRef.current.value)
    }
  return (
    <div>
        {text}
        <input type="text"
        placeholder='Enter a name'
        ref={textRef}
        />
        <button onClick={changeText}>Change Name</button>
    </div>
  )
}

export default Gomy