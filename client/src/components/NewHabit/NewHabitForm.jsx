import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import styled from 'styled-components'


const PageContainer = styled.div`
  padding-top: 10px;
`;

const PageTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  padding-left: 100px;
`;

const NewHabitContainer = styled.div`
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
    margin-top: 10px;
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
  font-size: 15px;
  margin-bottom: 15px;
`;
const SubmitButton = styled.div`
  background-color: #FA5F55;
  border: none;
  border-radius: 2px;
  padding: 8px 10px 8px 10px;
  color: white;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
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

const NewHabitForm = ({user}) => {
    const [habitName, setHabitName] = useState("")
    const [habitDaily, setHabitDaily] = useState("")
    const [habitWeekly, setHabitWeekly] = useState("")
    const [habitMonthly, setHabitMonthly] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (habitName, habitDaily, habitWeekly, habitMonthly) => {
		fetch("/habits", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                "name": habitName,
                "daily": habitDaily,
                "weekly": habitWeekly,
                "monthly": habitMonthly,
                "user": user
            })
        })
        .then(res => res.json())
        .then(data => {
          // PATCH request on User object
          // user.habits.push(data)
          console.log(data)
          console.log(user)
          navigate("/habits")
        })
    }

	return (
		<PageContainer>
			<PageTitle>Atomic Habit Tracker</PageTitle>
			<NewHabitContainer>
				<FormTitle>Create New Habit</FormTitle>
				<FormContainer>
					<InputSection>
						<label htmlFor='habitName'>Name</label>
						<input 
							type="text"
							id="habitName"
							placeholder='Name'
							maxLength="25"
							value={habitName}
							onChange={(e) => setHabitName(e.target.value)}
						/>
						<label htmlFor='habitDaily'>Daily Habit?</label>
						<input 
							type="text"
							id="habitDaily"
							placeholder='type true or false'
							maxLength="25"
							value={habitDaily}
							onChange={(e) => setHabitDaily(e.target.value)}
						/>
						<label htmlFor='habitWeekly'>Weekly Habit?</label>
						<input 
							type="text"
							id="habitWeekly"
							placeholder='type true or false'
							maxLength="25"
							value={habitWeekly}
							onChange={(e) => setHabitWeekly(e.target.value)}
						/>
						<label htmlFor='habitMonthly'>Monthly Habit?</label>
						<input 
							type="text"
							id="habitMonthly"
							placeholder='type true or false'
							maxLength="25"
							value={habitMonthly}
							onChange={(e) => setHabitMonthly(e.target.value)}
						/>
					</InputSection>
						<ButtonContainer>
							<SubmitButton type='submit' onClick={(e) => handleSubmit(habitName, habitDaily, habitWeekly, habitMonthly)}>
								CREATE HABIT
							</SubmitButton>
						</ButtonContainer>
				</FormContainer>
			</NewHabitContainer>
		</PageContainer>
	)
	}

export default NewHabitForm