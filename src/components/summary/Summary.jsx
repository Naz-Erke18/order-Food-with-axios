import React from 'react'
import styled from 'styled-components'
import BackGroundImg from '../../assets/images/summary-bgc.jpg'
import SummaryInfoCard from './SummaryInfoCard'

const Summary = () => {
  return (
    <Container>
      <ImgStyled src={BackGroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  )
}

const Container = styled.div`
  height: 527px;
`

const ImgStyled = styled.img`
  height: 432px;
  width: 100%;
`
export default Summary
