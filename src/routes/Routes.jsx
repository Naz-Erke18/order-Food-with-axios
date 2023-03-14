import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Userlayout from '../layout/Userlayout'
import MealsPage from '../pages/Meals.page'
import SignUpPage from '../pages/SignUp.page'
import SignInPage from '../pages/SignIn.page'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userlayout />}>
          <Route index element={<MealsPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
