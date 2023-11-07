import React, {useState} from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  padding-top: 10px;
`;

const PageTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  padding-left: 100px;
`;

const EditHabitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.div`
  font-size: 30px;
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
  background-color: #9da631;
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

const EditHabit = () => {
    const [habitName, setHabitName] = useState("")

    const handleEditSubmit = (e, habitName) => {
        e.preventDefault();

        fetch("/habits/" + 12, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                name: habitName,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)})
    }

	return (
		<PageContainer>
			<PageTitle>Atomic Habit Tracker</PageTitle>
			<EditHabitContainer>
				<FormTitle>Edit habit</FormTitle>
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
					</InputSection>
						<ButtonContainer>
							<SubmitButton type='submit' onClick={(e) => handleEditSubmit(e, habitName)}>
								UPDATE HABIT
							</SubmitButton>
						</ButtonContainer>
				</FormContainer>
			</EditHabitContainer>
		</PageContainer>
	)
	}

export default EditHabit