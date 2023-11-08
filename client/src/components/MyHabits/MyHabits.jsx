import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Goals from '../Goals';
import Habits from '../Habits'

const GridContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-areas:
        "nav"
        "main";
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr;
`;
const NavCountainer = styled.div`
    grid-area: "nav";
    padding-top: 10px;
    padding-left: 100px;
    background-color: #FFF5EE;
`;
const MainCountainer = styled.div`
    grid-area: "main";
    padding-top: 10px;
    padding-right: 100px;
    background-color: white;
`;

const Title = styled.div`
    font-size: 35px;
    margin-bottom: 80px;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 92px;
`;

const HeaderItem = styled.div`
    padding-right: 50px;
    :last-child {
        padding: 0;
    }
    font-size: 25px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const MyHabits = ({user}) => {
    const [, forceUpdate] = useState()

  return (
    <GridContainer>
        <NavCountainer>
            <Title>Atomic Habit Tracker</Title>
            <Goals user={user}></Goals>
        </NavCountainer>
        
        <MainCountainer>
            <HeaderContainer>
                <HeaderItem>Hello {user.username}</HeaderItem>
                <HeaderItem><StyledLink to='/'>Welcome</StyledLink></HeaderItem>
                <HeaderItem><StyledLink to='/login'>Login</StyledLink></HeaderItem>
                <HeaderItem><StyledLink to='/signup'>Signup</StyledLink></HeaderItem>
            </HeaderContainer>
            <Habits user={user} forceUpdate={() => forceUpdate({})}></Habits>
        </MainCountainer>
    </GridContainer>
  )
}

export default MyHabits