import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
  const [inputData, setInputData] = useState([''])
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8000/users', inputData)
      .then((res) => {
        toast.success('Data Add Successfully!...')
        navigate('/')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='flex justify-center flex-col items-center w-full h-screen bg-neutral-200 font-poppins'>
      <div className='lg:w-1/3 w-3/4 bg-white rounded-lg shadow py-8 px-8'>
        <h2 className='text-center py-2 text-2xl text-neutral-400'>
          Add New Data
        </h2>
        <form className='space-y-3' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1 col-span-full'>
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              name='name'
              id='name'
              autoComplete='name'
              placeholder='Enter your name'
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, age: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
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
              onChange={(e) =>
                setInputData({ ...inputData, city: e.target.value })
              }
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
