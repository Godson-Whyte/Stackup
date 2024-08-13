import React, {useState} from 'react'

const cards = ({image, title, price}) => {
    const [name, setName] = useState('Luca')

    const handleChange = () => {
        setName('Mary')
    }

  return (
    <div>
        <div className='card'>
            <img src={image} alt="" />
            <h4>Product: {title}</h4>
            <h6>Price: {price}</h6>
        </div>

        <h4 onMouseOver={handleChange}>Name: {name} </h4>
    </div>
  )
}

export default cards