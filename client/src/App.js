import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './components/Welcome';
import MyHabits from './components/MyHabits';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import Habits from './components/Habits';
// import EditHabit from './components/EditHabit/EditHabit'
import NewGoalForm from './components/NewGoal/NewGoalForm'
// import EditGoal from './components/EditGoal/EditGoal'
import NewHabitForm from './components/NewHabit/NewHabitForm'
import Navigate from './components/Navigate';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState('');

  // useEffect(() => {
  //   // auto-login
  //   fetch("/check_session")
  //   .then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/habits" element={<MyHabits user={user}/>} />
        <Route path="/habitlist" element={<Habits user={user}/>} />
        <Route path="/navigate" element={<Navigate user={user}/>} />
        <Route path="/newhabit" element={<NewHabitForm user={user}/>} />
        <Route path="/newGoal" element={<NewGoalForm user={user}/>} />
        {/* <Route path="/edithabit" element={<EditHabit/>} /> */}
        {/* <Route path="/editgoal" element={<EditGoal/>} /> */}
        <Route path="/Signup" element={<Signup onLogin={setUser}/>} />
        <Route path="/Login" element={<Login setUser={setUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
