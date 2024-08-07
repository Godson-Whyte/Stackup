import React, {useEffect} from 'react'
import Cards from '../cards/cards'

const Body = () => {

    useEffect(() => {
        alert("I'm calling an API")
    }, [])


  return (
    <div style = {{display:'flex'}} >
        <Cards image='https://placehold.co/200x200?text=Img+1' title='Nike' price='$200'/>
        <Cards image='https://placehold.co/200x200?text=Img+2' title='Nike' price='$200'/>
        <Cards image='https://placehold.co/200x200?text=Img+3' title='Nike' price='$200'/>
    </div>
  )
}

export default Body