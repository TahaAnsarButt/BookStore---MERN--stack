import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState("false");
  const [currentvalue, setValue] = useState({
    author: '',
    title: '',
    publishYear: ''
  });
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`).then((response) => {
      setLoading(false);
      setValue(response.data);
      // setTitle(response.data.title);
      // setAuthor(response.data.author);
      // setPublishYear(response.data.publishYear);
    });
  }, [id]);
  const updateit = () => {
    // e.preventdefault();
    // setNewVal(e.target.value);
    // navigate("/");
    const data = {
      title: currentvalue.title,
      author: currentvalue.author,
      publishYear: currentvalue.publishYear
    }
    axios.put(`http://localhost:5555/books/${id}`,data)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className='text-3xl my-4'>Update Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-2ky-400 rounded-xl-w-[600px] p-4 mx-auto">
        <div my-4>
        <label className='text-xl mr-4 text gray-500'>Author</label>
          <input
            type="text"
            value={author}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            onChange={(e) => setValue((prevvalue => ({...prevvalue, author: e.target.value })))}
          />
        </div>
        <div my-4>
        <label className='text-xl mr-4 text gray-500'>Title</label>
          <input
            type="text"
            value={title}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            onChange={(e) => setValue((prevvalue => ({...prevvalue, title: e.target.value})))}
          />
        </div>
        <label className='text-xl mr-4 text gray-500'>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            onChange={(e) => setValue((prevvalue) => ({...prevvalue, publishYear: e.target.value}))}
          />
      <div>
        <button className='p-2 bg-sky-300 m-8' onClick={updateit}>update</button>
      </div>
        </div>
      
    </div>
  );
};

export default UpdateBook;
