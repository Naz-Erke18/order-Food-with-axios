import { Outlet } from 'react-router-dom'

import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Basket from '../components/basket/Basket'
import Header from '../components/header/Header'

function Userlayout() {
  const [isBasketVisible, setBasketVisisble] = useState(false)

  const showBasketHandler = useCallback(() => {
    setBasketVisisble((prevState) => !prevState)
  }, [])
  return (
    <>
      <Header onShowBasket={showBasketHandler} />
      {isBasketVisible && <Basket onClose={showBasketHandler} />}
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export default Userlayout

const Content = styled.div`
  margin-top: 101px;
`
