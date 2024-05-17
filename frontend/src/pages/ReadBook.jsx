import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const ReadBook = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5555/books/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setBooks(response);
        setLoading(false);
      })
    // axios
    //   .get(`http://localhost:5555/books/${id}`)
    //   .then((response) => {
    //     setBooks(response.data);
    //     setLoading(false);
    //   })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <BackButton/>
        <h1 className="text-3xl my-8">Book detail</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Title</th>
            </tr>
          </thead>
          <tbody>
            
              <tr key={book._id} className="h-8">
               
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                
                
              </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReadBook;
