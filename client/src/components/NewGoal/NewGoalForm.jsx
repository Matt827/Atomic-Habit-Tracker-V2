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

const NewGoalContainer = styled.div`
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

const NewGoalForm = ({user}) => {
    const [goalName, setGoalName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (goalName) => {
		fetch("/goals", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                goal: goalName,
                user_id: user.id,
            })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          navigate("/habits")
        })
    }

	return (
		<PageContainer>
			<PageTitle>Atomic Habit Tracker</PageTitle>
			<NewGoalContainer>
				<FormTitle>Create New Goal</FormTitle>
				<FormContainer>
					<InputSection>
						<label htmlFor='goalName'>Goal</label>
						<input 
							type="text"
							id="goalName"
							placeholder='goal'
							maxLength="25"
							value={goalName}
							onChange={(e) => setGoalName(e.target.value)}
						/>
					</InputSection>
						<ButtonContainer>
							<SubmitButton type='submit' onClick={(e) => handleSubmit(goalName)}>
								CREATE GOAL
							</SubmitButton>
						</ButtonContainer>
				</FormContainer>
			</NewGoalContainer>
		</PageContainer>
	)
	}

export default NewGoalForm