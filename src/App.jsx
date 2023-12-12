import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function App() {
  const [records, setRecords] = useState([])
  const navigate = useNavigate()
  //Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/users')
        setRecords(res.data)
      } catch (error) {
        console.error('Error fetching user data:', error.message)
      }
    }
    fetchData()
  }, [])
  //Delete Data
  function handleSubmit(id) {
    const conform = window.confirm('Do you want to delete')
    if (conform) {
      axios
        .delete('http://localhost:8000/users/' + id)
        .then((res) => {
          toast.warning('Data deleted successfully')
          navigate('/')
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <>
      <div className='my-6 font-poppins'>
        <h2 className='text-2xl font-poppins text-neutral-500 py-5 text-center'>
          React CRUD Operation
        </h2>
        <div className='py-3 flex justify-end lg:mx-28 mx-4'>
          <Link to='/create'>
            <button className='px-6 py-2 bg-slate-500 rounded-lg text-white hover:bg-slate-700 ease-in duration-300'>
              Add +
            </button>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <table className='table-fixed'>
            <thead>
              <tr className='bg-indigo-500 text-white'>
                <th className='px-6 py-4 border border-neutral-500'>ID</th>
                <th className='px-6 py-4 border border-neutral-500'>Name</th>
                <th className='px-6 py-4 border border-neutral-500'>Age</th>
                <th className='px-6 py-4 border border-neutral-500'>Email</th>
                <th className='px-6 py-4 border border-neutral-500'>Address</th>
                <th className='px-6 py-4 border border-neutral-500'>City</th>
                <th className='px-6 py-4 border border-neutral-500'>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((data, index) => (
                <tr key={index} className='border'>
                  <td className='px-6 py-4 border border-neutral-400'>
                    {data.id}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    {data.name}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    {data.age}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    {data.email}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    {data.address}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    {data.city}
                  </td>
                  <td className='px-6 py-4 border border-neutral-600'>
                    <Link to={`/update/${data.id}`}>
                      <button className='px-4 py-2 bg-green-500 rounded-lg text-white mx-2 hover:bg-green-700 ease-in duration-300'>
                        Update
                      </button>
                    </Link>
                    <Link to='/delete'>
                      <button
                        onClick={(e) => handleSubmit(data.id)}
                        className='px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-700 ease-in duration-300'
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
