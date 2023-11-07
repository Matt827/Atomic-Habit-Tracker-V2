import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { signupUser } from '../UserSlice';
import {useDispatch} from 'react-redux'


const PageContainer = styled.div`
  padding-top: 10px;
`;

const PageTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  padding-left: 100px;
`;

const LoginContainer = styled.div`
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
const LoginButton = styled.div`
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

const Login = ({setUser}) => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    })

	const navigate = useNavigate()
    const [loginFound, setLoginFound] = useState(true)
    // const [loginForm, setLoginForm] = useState({})

    const handleUserInfoChange = (e) => {
        const {id, value} = e.target
        setUserInfo((currentState) => ({
            ...currentState,
            [id]: value,
        }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
	
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
        	}),
        })
		.then(res => {
			if (res.status === 201) {
				return res.json()
			} else if (res.status === 400) {
				setLoginFound(false)
				console.error('User Data Not Found')
				return Promise.reject('User Data Not Found')
			}
		})
		.then(data => {
			console.log(data)
			setUser(data)
			navigate('/habits')
		})
			
		// 	res.json())
		// .then(data => {
		// 	onLogin(data)
		// 	console.log(data)
      	// });
    }

  return (
    <PageContainer>
        <PageTitle>Atomic Habit Tracker</PageTitle>
        <LoginContainer>
            <FormTitle>Login</FormTitle>
            <FormContainer>
                <InputSection>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder='Username'
                        maxLength="25"
                        onChange={handleUserInfoChange}
                    />
                </InputSection>
                <InputSection>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder='Password'
                        onChange={handleUserInfoChange}
                    />
                </InputSection>
                    <ButtonContainer>
                        <LoginButton type='submit' onClick={handleSubmit}>
                            Login
                        </LoginButton>
                    </ButtonContainer>
            </FormContainer>
            <div>Don't have an account? <StyledLink to='/signup'>Sign up here</StyledLink></div>
        </LoginContainer>
    </PageContainer>
  )
}

export default Login