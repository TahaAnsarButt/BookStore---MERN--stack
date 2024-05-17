import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";


const Dashboard = () => {
    const navigate = useNavigate()
//   const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false); 
//   const [bookRows, setBookRows] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://localhost:5555/modules')
//       .then(response => response.json())
//       .then((response) => {
//         setModules(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(()=>{
//     const rows = 
//         modules.map((item)=>{
//             <div>
//             {item.name}
//             {item.Id}
//             </div>
//         });
//         setBookRows(rows)
    
//   },[modules])

const gotobookhome = () => {
    navigate('/books')
}





  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Dashboard</h1>
        
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <button onClick={gotobookhome}>go to Book Home</button>
      )}
    </div>
  );
};

export default Dashboard;
