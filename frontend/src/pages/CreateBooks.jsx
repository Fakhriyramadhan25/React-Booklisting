import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';


const CreateBooks = () => {
  const [loading, setLoading] = useState(false);
  const [author, setAuthor]= useState();
  const [title,setTitle] = useState();
  const [publisher, setPublisher] = useState();
  const [publishYear, setPublishYear] = useState();

  const navigate = useNavigate();


    const handleSaveBook = () =>{
      const data ={
        title,
        author,
        publisher,
        publishYear
      };

      setLoading(true);
      axios.post('http://localhost:4000/books', data)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      })
    }


  return (
    <div className='p-4'>
      <BackButton/>
      <div className='text-3xl my-4'>Create Book</div>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4'>Title</label>
          <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type='text' placeholder='name the book title' className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Author</label>
          <input onChange={(e)=>{setAuthor(e.target.value)}} value={author} type='text' placeholder='name the book author' className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>publisher</label>
          <input onChange={(e)=>{setPublisher(e.target.value)}} value={publisher} type='text' placeholder='name the book publisher' className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Publish Year</label>
          <input onChange={(e)=>{setPublishYear(e.target.value)}} value={publishYear} type='number' placeholder='Year of publish' className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button onClick={handleSaveBook} type='submit' className='p-2 bg-sky-300 m-8'>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks