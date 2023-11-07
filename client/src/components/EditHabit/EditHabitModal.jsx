import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'


const EditHabitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    font-weight: bold;
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

function EditHabitModal({habit, handleUpdateDailyHabit, handleUpdateWeeklyHabit, handleUpdateMonthlyHabit}) {
    const [habitName, setHabitName] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditSubmit = (e) => {
        e.preventDefault();

        fetch("/habits/" + habit.id, {
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
          if (data.daily === "true") {
            handleUpdateDailyHabit(data)
          } else if (data.weekly === "true") { 
            handleUpdateWeeklyHabit(data)
          } else if (data.monthly === "true") {
            handleUpdateMonthlyHabit(data)
          }
            console.log(data)
            handleClose()
        })
    }

  return (
    <>
    <EditHabitContainer>
        <img src='images/edit.png' alt="edit-habit-btn" onClick={handleShow}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>EDIT HABIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <FormContainer>
                    <InputSection>
                        <label htmlFor='habitName'>Habit</label>
                        <input 
                            type="text"
                            id="habitName"
                            placeholder='habit'
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
        </Modal.Body>
      </Modal>
        </EditHabitContainer>
    </>
  );
}

export default EditHabitModal;