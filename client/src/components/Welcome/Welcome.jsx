import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const NavCountainer = styled.div`
    grid-area: "nav";
    padding-top: 10px;
    padding-left: 100px;
    // background-color: #FFF5EE;
`;

const Title = styled.div`
    font-size: 45px;
    font-weight: bold;
    // text-decorator-line: underline;
    // color: white;
    margin-bottom: 80px;
`;

const WelcomeContainer = styled.div`
  margin-left: 500px;
  margin-right: 500px;
  // padding: 500px;
  width: 200px
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 80px;
  font-weight: bold;
  // color: white;
  padding-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // width: 14%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-weight: bold;
  label {
    margin-bottom: 5px;
  }
  input {
    padding: 5px;
    border: 2px solid #e3e3e3;
    :focus {
      outline: 2px solid #9da631;
      border: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
const SubmitButton = styled.div`
  background-color: #FA5F55;
  border: none;
  border-radius: 2px;
  padding: 16px 20px 16px 20px;
  color: white;
  font-family: inherit;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  :focus {
    outline: none;
    border: none;
  }
`;

const Welcome = () => {

  const navigate = useNavigate()

  function handleClick(e) {
    navigate("/signup")
  }

  return (
    <>
      <div style={{
        backgroundImage: `url(images/home5.jpg)`,
        height: '100vh',  
        // width: '200vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <NavCountainer>
              <Title>Atomic Habit Tracker</Title>
        </NavCountainer>
        <WelcomeContainer>
				<FormTitle>Motivation is what gets you started. Habit is what keeps you going.</FormTitle>
				<FormContainer>
						<ButtonContainer>
							<SubmitButton onClick={handleClick}>
								GET STARTED
							</SubmitButton>
						</ButtonContainer>
				</FormContainer>
        <div>
          <p></p>
        </div>
			</WelcomeContainer>
      </div>
      {/* <div>
        <p style={{
          fontSize: 40,
          // color: 'white',

          }}>
        "Building habits in the present allows you to do more of what you want in the future."
        </p>
      </div> */}
    </>
  )
}

export default Welcome