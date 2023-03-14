import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/auth/auth.thunk'
import { UserRoles } from '../lib/constants/common'

function SignUpPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const confirmChangeHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      name,
      password,
      role: UserRoles.ADMIN,
    }
    dispatch(signUp(data))
      .unwrap()
      .then(() => navigate('/'))
  }
  return (
    <Grid display="flex" justifyContent="center" marginTop={20}>
      <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid display="flex" flexDirection="column">
            <TextField value={name} onChange={nameChangeHandler} label="Name" />
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
            <TextField
              value={confirmPassword}
              onChange={confirmChangeHandler}
              label="Confirm Password"
            />
            <Button type="submit">Sign Up</Button>
            <Link to="/signin">Have an account?</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default SignUpPage
