import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
  font-weight: bold;
  img {
    cursor: pointer;
  }
  button {
	background-color: transparent;
	border: none;
  }
`;

const FormTitle = styled.div`
  font-size: 30px;
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
  font-weight: bold;
  cursor: pointer;
  :focus {
    outline: none;
    border: none;
  }
`;

const NewGoalModal = ({user, handleAddGoal}) => {
    const [goalName, setGoalName] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
          handleAddGoal(data)
          handleClose()
        })
    }

  return (
    <NewGoalContainer>
        <button onClick={handleShow}><img src='images/add.png' alt="edit-habit-btn"/>ADD A HABIT</button>
        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>CREATE GOAL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            </Modal.Body>
        </Modal>
	</NewGoalContainer>
  )
}

export default NewGoalModal