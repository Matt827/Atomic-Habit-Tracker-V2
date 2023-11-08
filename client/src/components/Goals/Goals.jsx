import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getGoals from './GoalsSlice';
import EditGoalModal from '../EditGoal/EditGoalModal';

const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
`;
const GoalsHeader = styled.div`
	display: flex;
    justify-content: space-between;
	margin-bottom: 45px;
`;
const TitleSection = styled.div`
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 8px;
	font-size: 30px;
`;
const AddGoalButton = styled.div`
	text-transform: uppercase;
	display: flex;
	align-items: center;
	img {
		max-width: 16px;
		margin-width: 8px;
	}
`;
const GoalRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	margin-bottom: 45px;
	:last-child {
		margin-bottom: 0;
	}
`;
const Name = styled.div`
	text-tranform: uppercase
`;
const Action = styled.div`
	display: flex;
	align-items: center;
	img {
		max-width: 20px;
		margin-right: 8px;
		margin-left: 8px;
		cursor: pointer;
		:last-child {
			margin: 0;
		}
	}
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const goalNameStyle = {
	"text-transform": "uppercase",
	"font-size": "20px",
}


const Goals = ({user}) => {
	const [goals, setGoals] = useState([])

	function handleDeleteGoals(deletedGoal) {
		const updatedGoals = goals.filter(goal => goal.id !== deletedGoal.id)
		console.log(updatedGoals)
		setGoals(updatedGoals)
	}

	function handleUpdateGoal(updatedGoal){
		
		const updatedGoals = goals.map(goal => {
		  if (goal.id === updatedGoal.id){
			return updatedGoal
		  } else {
			return goal
		  }
		})
		console.log(updatedGoals)
		setGoals(updatedGoals)
	  }

    useEffect(() => {
        fetch("/goals")
        .then(res => res.json())
        .then(goals => {
			const userGoals =[]
			goals.forEach(goal => {
				if (goal.user_id === user.id) {
					userGoals.push(goal)
				}
			})
			setGoals(userGoals)
		})
    }, [])

	const handleDelete = (goal) => {
		handleDeleteGoals(goal)
        fetch("/goals/" + goal.id, {
            method: "DELETE",
            headers: {
                "content-type" : "application/json"
            },
        })
        .then(data => {
			console.log(data)})
    }

	return (
		<GoalsContainer>
			<GoalsHeader>
				<TitleSection>goals</TitleSection>
				<AddGoalButton>
					<StyledLink to='/newGoal'><img src='images/add.png' alt="add-goal-btn" />add a goal</StyledLink>
				</AddGoalButton>
			</GoalsHeader>
				{goals.map((goal, index) => (
					<GoalRow key={goal.id}>
						<Name style={goalNameStyle}>{goal.goal}</Name>
						<Action>
							<EditGoalModal goal={goal} handleUpdateGoal={handleUpdateGoal}/>
							{/* <Link to='/editGoal'><img src='images/edit.png' alt="edit-goal-btn"/></Link> */}
							/
							<img src='images/delete.png' alt ="delete-goal-btn" onClick={(e) => handleDelete(goal)}/>
						</Action>
					</GoalRow>
				))}
		</GoalsContainer>
	)
}

export default Goals