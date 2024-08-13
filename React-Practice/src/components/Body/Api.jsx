import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Api = () => {
    const [details, setDetails] = useState('')

    useEffect(() => {
        getApi()
    },[])

    const getApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
       const data = res.data

       const allDetails = data.map(val => {
        return(
            <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
            </tr>
        )
       })
        console.log(data);
        setDetails(allDetails)
    }).catch(err => {
        console.log(err);
    })
}

  return (
    <div>
        {details}
        {/* <button onClick={getApi}>Fetch data</button> */}
    </div>
  )
}

export default Api