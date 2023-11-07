import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const EditGoalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
//   width: 14%;
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

function EditGoalModal({goal, handleUpdateGoal}) {
    const [goalName, setGoalName] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditSubmit = (e) => {
        e.preventDefault();

        fetch("/goals/" + goal.id, {
          method: "PATCH",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify({
            goal: goalName,
          })
        })
        .then(res => res.json())
        .then(data => {
            handleUpdateGoal(data)
            console.log(data)
            handleClose()
        })
    }

  return (
    <>
    <EditGoalContainer>
        <img src='images/edit.png' alt="edit-goal-btn" onClick={handleShow}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>EDIT GOAL</Modal.Title>
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
                            <SubmitButton type='submit' onClick={(e) => handleEditSubmit(e, goalName)}>
                                UPDATE GOAL
                            </SubmitButton>
                        </ButtonContainer>
                </FormContainer>
        </Modal.Body>
      </Modal>
        </EditGoalContainer>
    </>
  );
}

export default EditGoalModal;