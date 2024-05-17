import React, {useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [loading, setLoading] = useState('false');
  const [deleting, setdelete] = useState('');
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      // navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
      
  },[id])
  const delbutt = () => {
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setdelete(response.data)
      // setLoading(true);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-2ky-400 rounded-xl-w-[600px] p-4 mx-auto">
        <div className='my-4'>
          <button className='p-2 bg-sky-300 m-8' onClick={delbutt}>Delete</button>
          
        </div>
      </div>
      </div>
  )
}

export default DeleteBook