import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { signupUser } from '../UserSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';


const PageContainer = styled.div`
  padding-top: 10px;
`;

const PageTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  padding-left: 100px;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.div`
  font-size: 45px;
  padding-bottom: 10px;
`;

const FormContainer = styled.div`
  justify-content: flex-start;
  width: 14%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 20px;
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
  font-size: 15px;
  font-weight: bold;
`;
const SubmitButton = styled.div`
  background-color: #FA5F55;
  border: none;
  border-radius: 2px;
  padding: 8px 10px 8px 10px;
  color: white;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  :focus {
    outline: none;
    border: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FA5F55;
  font-weight: bold;
`;

const Signup = ({onLogin}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [imageUrl, setImageUrl] = useState("");

  const [userExists, setUserExists] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const navigate = useNavigate()

    // const handleUserInfoChange = (e) => {
    //     const {id, value} = e.target
    //     setUserInfo((currentState) => ({
    //         ...currentState,
    //         [id]: value,
    //     }))
    // }

	function handleSubmit(e) {
		e.preventDefault();;
		fetch("/signup", {
		  method: "POST",
		  headers: {
			  "Content-Type": "application/json",
		  },
		  body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
		  }),
		})
    .then(res => {
      if (res.status === 201) {
        return res.json()
      } else if (res.status === 500) {
        setUserExists(true)
        setValidationError(false)
        console.error('Username already exists')
      } else if (res.status === 400) {
        setUserExists(false)
        setValidationError(true)
        console.error('Username and password must be present')
      }
    })
    .then(data => {
      console.log(data)
      onLogin(data)
      navigate("/habits")
    })
	  }

  return (
    <PageContainer>
        <PageTitle>Atomic Habit Tracker</PageTitle>
        <SignupContainer>
            <FormTitle>Signup</FormTitle>
            <FormContainer>
                {/* <InputSection>
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        type="text"
                        id="firstName"
                        placeholder='First Name'
                        maxLength="25"
                        onChange={handleUserInfoChange}
                    />
                </InputSection>
                <InputSection>
                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                        type="text"
                        id="lastName"
                        placeholder='Last Name'
                        maxLength="25"
                        onChange={handleUserInfoChange}
                    />
                </InputSection> */}
                <InputSection>
                    <label htmlFor='userName'>Username</label>
                    <input 
                        type="text"
                        id="userName"
                        placeholder='Username'
                        maxLength="25"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputSection>
                <InputSection>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputSection>
                <InputSection>
                    <label htmlFor='password-confirmation'>Confirm Password</label>
                    <input 
                        type="password"
                        id="password-confirmation"
                        placeholder='Confirm Password'
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </InputSection>
                    <ButtonContainer>
                        <SubmitButton type='submit' onClick={handleSubmit}>
                            Sign up
                        </SubmitButton>
                    </ButtonContainer>
            </FormContainer>
            <div>Already have an account? <StyledLink to='/login'>Login here</StyledLink></div>
        </SignupContainer>
    </PageContainer>
  )
}

export default Signup