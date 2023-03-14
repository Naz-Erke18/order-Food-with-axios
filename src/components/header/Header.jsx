import { AppBar } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styledComponent from 'styled-components'
import { getBasket } from '../../store/basket/thunks'
import { uiSLiceActions } from '../../store/ui/ui.slice'
import ButtonMui from '../UI/ButtonMui'
import BasketButton from './BasketButton'

function Header({ onShowBasket }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isAuthorized = useSelector((state) => state.auth.isAuthorized)
  const { items } = useSelector((state) => state.basket)

  const themeMode = useSelector((state) => state.ui.themeMode)
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => s + item.amount, 0)
    return sum
  }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  const themeChangeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiSLiceActions.changeTheme(theme))
  }

  const signOutHandler = () => {
    navigate('/signin')
  }

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      />
      <ThemeBtnStyled onClick={themeChangeHandler}>
        {' '}
        Toggle theme
      </ThemeBtnStyled>
      {isAuthorized ? (
        <ThemeBtnStyled onClick={signOutHandler}>Sign Out</ThemeBtnStyled>
      ) : (
        <ThemeBtnStyled onClick={() => navigate('/signin')}>
          Sign In
        </ThemeBtnStyled>
      )}
    </Container>
  )
}

export default Header

const ThemeBtnStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    background: theme.palette.primary.dark,

    padding: '10px 30px',

    border: 'none',
  },
}))

const Container = styled(AppBar)(({ theme }) => ({
  '&': {
    background: theme.palette.primary.dark,
    width: '100%',
    height: ' 101px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',
  },
}))

const Logo = styledComponent.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`
