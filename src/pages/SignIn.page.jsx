import { Grid, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../store/auth/auth.thunk'

function SignInPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(signIn(data))
      .unrwap()
      .then(() => navigate('/admin/meals'))
      .catch((err) => {
        setError(err.response.data.message)
      })
  }
  return (
    <Grid display="flex" justifyContent="center" marginTop={20}>
      <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid display="flex" flexDirection="column">
            <TextField
              value={email}
              onChange={emailChangeHandler}
              label="Email"
            />
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              label="Password"
            />
            {error && <Typography>{error}</Typography>}
            <Button type="submit">Sign In</Button>
            <Link to="/signup">{` Don't have account?`}</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default SignInPage
