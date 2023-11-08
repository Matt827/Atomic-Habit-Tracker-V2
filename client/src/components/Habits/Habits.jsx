import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditHabit from '../EditHabit/EditHabit';
import EditHabitModal from '../EditHabit/EditHabitModal';
import NewHabitModal from '../NewHabit/NewHabitModal';
import { Table } from "reactstrap"

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
`;
const HabitsHeader = styled.div`
    display: flex;
    // justify-content: space-between;
    margin-bottom: 45px;
`;
const TitleSection = styled.div`
    text-transform: uppercase;
	text-decoration: underline;
    letter-spacing: 8px;
    font-size: 30px;
    padding-left: 100px
`;
const AddHabitButton = styled.div`
	text-transform: uppercase;
	display: flex;
	align-items: center;
	margin-left: 45px;
	img {
		max-width: 16px;
		margin-width: 8px;
	}
`;
const HabitRow = styled.div`

`;
const Name = styled.div`
    font-size: 20;
    text-tranform: uppercase;
`;
const Action = styled.div`
	display: flex;
	align-items: center;
    cursor: pointer;
	img {
		max-width: 20px;
		margin-left: 12px;
		margin-right: 12px;
		:last-child {
			margin: 0;
		}
	}
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
const StyledTable = styled(Table)`
	display: block;
	flex-direction: column;
	padding-left: 100px;
	
	table {
		border-collapse: collapse;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	
	input.form-check-input {
		width: 20px;
		height: 20px;
		/* On mouse-over, add a grey background color */
		hover input ~ .checkmark {
		background-color: #ccc;
		}

		/* When the checkbox is checked, add a blue background */
		checked ~ .checkmark {
		background-color: #2196F3;
		}
	}
	
	th, td {
		border: 1px solid #000;
		padding: 8px;
		text-align: center;
	  }
	
	  th {
		background-color: #f2f2f2;
	  }
	
	  tr:nth-child(odd) {
		background-color: #f9f9f9;
	  }
	
	  tr:nth-child(even) {
		background-color: #ffffff;
	  }

	  
	  th:first-child, td:first-child {
		  width: 280px;
		}
		
		tr:not(:first-child) {
			height: 55px;
		}

	  th:not(:first-child), td:not(:first-child) {
		width: 40px;
	}
`
const StyledTableTop = styled.table`
	display: block;
	flex-direction: column;
	padding-left: 100px;

	table {
		border-collapse: collapse;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}

	th:not(:first-child){
		border: 1px solid #000;
		border-bottom-style: none;
		padding: 8px;
		text-align: center;
	}

	th {
		background-color: #f2f2f2;
	}

	th:first-child, td:first-child {
		width: 280px; 
	}

	th:last-child, td:last-child {
		width: 120px; 
	}

	th:not(:first-child):not(:last-child), td:not(:first-child):not(:last-child) {
		width: 280px; 
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}

	tr:nth-child(odd) {
		background-color: #ffffff;
	}
`

const StyledTable2 = styled(Table)`
	display: block;
	flex-direction: column;
	padding-left: 100px;
	
	table {
		border-collapse: collapse;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	
	input.form-check-input {
		width: 20px;
		height: 20px;
		/* On mouse-over, add a grey background color */
		hover input ~ .checkmark {
		background-color: #ccc;
		}

		/* When the checkbox is checked, add a blue background */
		checked ~ .checkmark {
		background-color: #2196F3;
		}
	}
	
	th, td {
		border: 1px solid #000;
		padding: 8px;
		text-align: center;
	  }
	
	  th {
		background-color: #f2f2f2;
	  }
	
	  tr:nth-child(odd) {
		background-color: #f9f9f9;
	  }
	
	  tr:nth-child(even) {
		background-color: #ffffff;
	  }

	  
	  th:first-child, td:first-child {
		  width: 280px;
		}
		
		tr:not(:first-child) {
			height: 55px;
		}
	
		th:last-child, td:last-child {
			width: 100px; 
		}

		th:not(:first-child):not(:last-child), td:not(:first-child):not(:last-child) {
		width: 280px;
	}
`

const StyledTable3 = styled(Table)`
	display: block;
	flex-direction: column;
	padding-left: 100px;
	
	table {
		border-collapse: collapse;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	
	input.form-check-input {
		width: 20px;
		height: 20px;
		/* On mouse-over, add a grey background color */
		hover input ~ .checkmark {
		background-color: #ccc;
		}

		/* When the checkbox is checked, add a blue background */
		checked ~ .checkmark {
		background-color: #2196F3;
		}
	}
	
	th, td {
		border: 1px solid #000;
		padding: 8px;
		text-align: center;
	  }
	
	  th {
		background-color: #f2f2f2;
	  }
	
	  tr:nth-child(odd) {
		background-color: #f9f9f9;
	  }
	
	  tr:nth-child(even) {
		background-color: #ffffff;
	  }

	  
	  th:first-child, td:first-child {
		  width: 280px;
		}
		
		tr:not(:first-child) {
			height: 55px;
		}
	
		th:last-child, td:last-child {
			width: 100px; 
		}

		th:not(:first-child):not(:last-child), td:not(:first-child):not(:last-child) {
		width: 560px;
	}
`

const week1Style = {
  backgroundColor: "#F88379",
  color: "white",
  "font-size": "19px"
}
const week1BoxStyle = {
  backgroundColor: "#F2D7D5",
  "text-transform": "uppercase",
  "font-size": "20px",
  "font-weight": "bold",
}
const week2Style = {
  backgroundColor: "#FFA500",
  color: "white",
  "font-size": "19px"
}
const week2BoxStyle = {
  backgroundColor: "#FAD7A0",
  "text-transform": "uppercase",
  "font-size": "20px",
  "font-weight": "bold",
}
const week3Style = {
  backgroundColor: "#CF9FFF",
  color: "white",
  "font-size": "19px"
}
const week3BoxStyle = {
  backgroundColor: "#E8DAEF ",
  "text-transform": "uppercase",
  "font-size": "20px",
  "font-weight": "bold",
}
const week4Style = {
  backgroundColor: "#FA5F55",
  color: "white",
  "font-size": "19px"
}
const week4BoxStyle = {
  	backgroundColor: "#F5B7B1",
	"text-transform": "uppercase",
	"font-size": "20px",
	"font-weight": "bold",
}
const extraDaysStyle = {
  backgroundColor: "#C0C0C0",
  color: "white",
  "font-size": "19px"
}
const extraDaysBoxStyle = {
  backgroundColor: "#C0C0C0",
}

const monthStyle = {
	backgroundColor: "white",
	color: "#FA5F55",
	"text-align": "center",
	"font-size": "50px",
	"font-family": "Times New Roman, Times, serif"
}
const habitsStyle = {
	backgroundColor: "#FFF5EE",
	color: "#FA5F55",
	"font-size": "25px",
	"font-family": "Times New Roman, Times, serif"
}
const habitNameStyle = {
	backgroundColor: "white",
	"text-transform": "uppercase",
	"font-size": "20px",
}

const Habits = ({user}) => {
	const [dailyHabits, setDailyHabits] = useState([])
	const [weeklyHabits, setWeeklyHabits] = useState([])
	const [monthlyHabits, setMonthlyHabits] = useState([])
	const [userHabitEntries, setUserHabitEntries] = useState([])

	useEffect(() => {
		const entryList = []
		user.h_entries.forEach(entry => {
			entryList.push(entry)
		})
		setUserHabitEntries(entryList)
	}, [])

	useEffect(() => {
		fetch("/habits")
		.then(res => res.json())
        .then(data => {
			const dailyHabits = []
			data.forEach(habit => {
				if (habit.daily === "true") {
					dailyHabits.push(habit)
				}
			})
			setDailyHabits(dailyHabits)
		})
	}, [])

	function handleDeleteDailyHabit(deletedHabit) {
		const updatedHabits = dailyHabits.filter(habit => habit.id !== deletedHabit.id)
		console.log(updatedHabits)
		setDailyHabits(updatedHabits)
	}
	function handleDeleteWeeklyHabit(deletedHabit) {
		const updatedHabits = weeklyHabits.filter(habit => habit.id !== deletedHabit.id)
		console.log(updatedHabits)
		setWeeklyHabits(updatedHabits)
	}
	function handleDeleteMonthlyHabit(deletedHabit) {
		const updatedHabits = monthlyHabits.filter(habit => habit.id !== deletedHabit.id)
		console.log(updatedHabits)
		setMonthlyHabits(updatedHabits)
	}

	// useEffect(() => {
	// 	const DailyHabitList = []
	// 	user.habits.forEach(habit => {
	// 		if (habit.daily == 'true') {
	// 			DailyHabitList.push(habit)
	// 		}
	// 	})
		
	// 	setDailyHabits(DailyHabitList)
	// }, [])

	// useEffect(() => {
	// 	const weeklyHabitList = []
	// 	user.habits.forEach(habit => {
	// 		if (habit.weekly == 'true') {
	// 			weeklyHabitList.push(habit)
	// 		}
	// 	})
		
	// 	setWeeklyHabits(weeklyHabitList)
	// }, [])

	// useEffect(() => {
	// 	const monthlyHabitList = []
	// 	user.habits.forEach(habit => {
	// 		if (habit.monthly == 'true') {
	// 			monthlyHabitList.push(habit)
	// 		}
	// 	})
		
	// 	setMonthlyHabits(monthlyHabitList)
	// }, [])

	const handleDelete = (habit) => {
		handleDeleteDailyHabit(habit)
		handleDeleteWeeklyHabit(habit)
		handleDeleteMonthlyHabit(habit)
        fetch("/habits/" + habit.id, {
			method: "DELETE",
            headers: {
				"content-type" : "application/json"
            },
        })
        .then(data => console.log(data))
    }
				
	function handleUpdateDailyHabit(updatedHabit){
		const updatedHabits = dailyHabits.map(habit => {
			if (habit.id === updatedHabit.id){
				return updatedHabit
			} else {
				return habit
		  }
		})
		console.log(updatedHabits)
		setDailyHabits(updatedHabits)
	}
	function handleUpdateWeeklyHabit(updatedHabit){
		const updatedHabits = weeklyHabits.map(habit => {
			if (habit.id === updatedHabit.id){
				return updatedHabit
			} else {
				return habit
			}
		})
		console.log(updatedHabits)
		setWeeklyHabits(updatedHabits)
	}
	function handleUpdateMonthlyHabit(updatedHabit){
		const updatedHabits = monthlyHabits.map(habit => {
			if (habit.id === updatedHabit.id){
				return updatedHabit
			} else {
				return habit
			}
		})
		console.log(updatedHabits)
		setMonthlyHabits(updatedHabits)
	}

	// function handleCheck(habit, day) {
	// 	if (habit[day] === "true") {
	// 		habit[day] = "false"
	// 	} else if (habit[day] === "false") {
	// 		habit[day] = "true"
	// 	}
	// 	fetch("/habits/" + habit.id, {
	// 				method: "PATCH",
	// 				headers: {
	// 					"content-type" : "application/json"
	// 				},
	// 				body: JSON.stringify({
	// 					[day] : habit[day]
	// 				})
	// 			})
	// 			.then(res => res.json())
	// 			.then(data => {
	// 				console.log(data)
	// 				const newList = dailyHabits.map(habit => {
	// 					if (habit.id === data.id) {
	// 						const updatedHabit = {
	// 							...habit,
	// 							[day] : habit[day],
	// 						}
	// 						return updatedHabit
	// 					}
	// 					return habit
	// 				})
	// 				setDailyHabits(newList)
	// 			})
	// 		 }

    const handleClick = (habit, value) => {
		fetch("/habit_entries", {
			method: "POST",
            headers: {
				"content-type" : "application/json"
            },
            body: JSON.stringify({
				habit_id: habit.id,
                user_id: user.id,
                entry_performed_date: value
            })
        })
        .then(res => res.json())
        .then(data => {
			console.log(data)
			// setUserHabits([...userHabits, data])
		})
	}

    return (
        <HabitsContainer>
            <HabitsHeader>
            <TitleSection>habits</TitleSection>
                <AddHabitButton >
					{/* <NewHabitModal user={user}/> */}
                    <StyledLink to='/newhabit'><img src='images/add.png' alt="add-habit-btn" />add a habit</StyledLink>
                </AddHabitButton>
            </HabitsHeader>
			<StyledTableTop>
				<tr>
					<th style={monthStyle} >November</th>
					<th style={week1Style} >WEEK 1</th>
					<th style={week2Style} >WEEK 2</th>
					<th style={week3Style} >WEEK 3</th>
					<th style={week4Style} >WEEK 4</th>
					<th style={extraDaysStyle} >EXTRA DAYS</th>
				</tr>
			</StyledTableTop>
		<StyledTable>
		<tr>
			<th style={habitsStyle}>DAILY HABITS</th>
			<th style={week1Style} >1</th>
			<th style={week1Style} >2</th>
			<th style={week1Style} >3</th>
			<th style={week1Style} >4</th>
			<th style={week1Style} >5</th>
			<th style={week1Style} >6</th>
			<th style={week1Style} >7</th>
			<th style={week2Style} >8</th>
			<th style={week2Style} >9</th>
			<th style={week2Style} >10</th>
			<th style={week2Style} >11</th>
			<th style={week2Style} >12</th>
			<th style={week2Style} >13</th>
			<th style={week2Style} >14</th>
			<th style={week3Style} >15</th>
			<th style={week3Style} >16</th>
			<th style={week3Style} >17</th>
			<th style={week3Style} >18</th>
			<th style={week3Style} >19</th>
			<th style={week3Style} >20</th>
			<th style={week3Style} >21</th>
			<th style={week4Style} >22</th>
			<th style={week4Style} >23</th>
			<th style={week4Style} >24</th>
			<th style={week4Style} >25</th>
			<th style={week4Style} >26</th>
			<th style={week4Style} >27</th>
			<th style={week4Style} >28</th>
			<th style={extraDaysStyle} >29</th>
			<th style={extraDaysStyle} >30</th>
			<th style={extraDaysStyle} >31</th>
			<th>EDIT / DELETE</th>
		</tr>
		{dailyHabits.map((habit) => (
				// <HabitRow key={habit.id}>
					<tr>
					<th style={habitNameStyle}>{habit.name}</th>

					{/* <td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" checked={false} onClick={(e) => handleCheck(habit, "day1")}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" checked={habit.day2} onClick={(e) => handleCheck(habit, "day2")}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" checked={habit.day3} onClick={(e) => handleCheck(habit, "day3")}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" checked={habit.day4} onClick={(e) => handleCheck(habit, "day4")}/></td> */}

					{/* <td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="day1" checked={habit.habit_entries.some(entry => {entry.entry_performed_date == "day1"})} onClick={(e) => handleClick(habit, e.target.value)}/></td> */}

					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={extraDaysBoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={extraDaysBoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					<td style={extraDaysBoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/></td>
					
					<td>
						<Action>
							<EditHabitModal habit={habit} handleUpdateDailyHabit={handleUpdateDailyHabit}/>
							/
							<img src='images/delete.png' alt ="delete-habit-btn" onClick={(e) => handleDelete(habit)}/>
						</Action>
					</td>
					</tr>
				// </HabitRow>
				))}
				</StyledTable>
	<StyledTable2>
		<tr>
			<th style={habitsStyle}>WEEKLY HABITS</th>
			<th style={week1Style} >WEEK 1</th>
			<th style={week2Style} >WEEK 2</th>
			<th style={week3Style} >WEEK 3</th>
			<th style={week4Style} >WEEK 4</th>
			<th>EDIT / DELETE</th>
		</tr>
		{weeklyHabits.map((habit, index) => (
				// <HabitRow key={index}>
					<tr>
					<th style={habitNameStyle}></th>
					<td style={week1BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/>{habit.name}</td>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/>{habit.name}</td>
					<td style={week3BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/>{habit.name}</td>
					<td style={week4BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/>{habit.name}</td>
				
					<td>
						<Action>
							<EditHabitModal habit={habit} handleUpdateWeeklyHabit={handleUpdateWeeklyHabit}/>
							/
							<img src='images/delete.png' alt ="delete-habit-btn" onClick={(e) => handleDelete(habit)}/>
						</Action>
					</td>
					</tr>
				// </HabitRow>
				))}
	</StyledTable2>
	<StyledTable3>
		<tr>
			<th style={habitsStyle}>MONTHLY HABITS</th>
			<th style={week2Style} >MONTHLY GOALS</th>
			<th style={week3Style} >NOTES</th>
			<th>EDIT / DELETE</th>
		</tr>
		{monthlyHabits.map((habit, index) => (
				// <HabitRow key={index}>
					<tr>
					<th style={habitNameStyle}></th>
					<td style={week2BoxStyle}><input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="monday" onClick={(e) => handleClick(habit, e.target.value)}/>{habit.name}</td>
					<td style={week3BoxStyle}></td>
				
					<td>
						<Action>
							<EditHabitModal habit={habit} handleUpdateMonthlyHabit={handleUpdateMonthlyHabit}/>
							/
							<img src='images/delete.png' alt ="delete-habit-btn" onClick={(e) => handleDelete(habit)}/>
						</Action>
					</td>
					</tr>
				// </HabitRow>
				))}
	</StyledTable3>
        </HabitsContainer>
    )
}

export default Habits