import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Update = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const navigate = useNavigate()
  //Fetch Data
  useEffect(() => {
    axios
      .get('http://localhost:8000/users/' + id)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  // Update Data
  function handleSubmit(event) {
    event.preventDefault()
    axios
      .put('http://localhost:8000/users/' + id, data)
      .then((res) => {
        toast.success('Data updated Successfully!..')
        navigate('/')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='flex justify-center flex-col items-center w-full h-screen bg-neutral-200 font-poppins'>
      <div className='lg:w-1/3 w-3/4 bg-white rounded-lg shadow py-8 px-8'>
        <h2 className='text-center py-2 text-2xl text-neutral-400'>
          Update Data
        </h2>
        <form className='space-y-3' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>Fullname</label>
            <input
              required
              type='text'
              name='name'
              id='name'
              autoComplete='name'
              placeholder='Enter your name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className='w-full border border-neutral-300 rounded py-1.5 px-2'
            />
          </div>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>Age</label>
            <input
              required
              type='number'
              name='age'
              id='age'
              autoComplete='age'
              placeholder='Enter your age'
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              className='w-full border border-neutral-300 rounded py-1.5 px-2'
            />
          </div>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>Email Address</label>
            <input
              required
              type='text'
              name='email'
              id='email'
              autoComplete='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className='w-full border border-neutral-300 rounded py-1.5 px-2'
            />
          </div>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>Address</label>
            <input
              required
              type='text'
              name='address'
              id='address'
              autoComplete='address'
              placeholder='Enter your address'
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              className='w-full border border-neutral-300 rounded py-1.5 px-2'
            />
          </div>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>City</label>
            <input
              required
              type='text'
              name='city'
              id='city'
              autoComplete='city'
              placeholder='Enter your city'
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              className='w-full border border-neutral-300 rounded py-1.5 px-2'
            />
          </div>
          <div className='flex justify-end'>
            <Link to='/'>
              <button className='px-4 py-2 text-neutral-400 hover:text-neutral-600 ease-in duration-300'>
                Cancel
              </button>
            </Link>
            <button className='px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 ease-in duration-300'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
