import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

function Signin() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() })
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields'))
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false){
      dispatch(signInFailure(data.message));
    }
    if(res.ok){
      dispatch(signInSuccess(data))
      navigate('/')
    }
    }catch(error){
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
            MERN <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-red-500 rounded-lg text-white'>BLOG</span>
        </Link>
        <p className='text-sm mt-5'>SignIn with your E-mail and Password or with Google</p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Enter Email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Enter Password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button type='submit' className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
            <OAuth />
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account..?</span>
              <Link to='/signup' className='text-blue-500'>SignUp</Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default Signin