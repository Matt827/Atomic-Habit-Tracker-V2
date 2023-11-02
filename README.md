h2>Atomic Habit Tracker</h2>

<h3>Description:</h3>

> Atomic Habit Tracker is a website that helps users measure, quantify, and track their progress to build better habits in various ways.

<h3>CRUD:</h3>

### user ###
* CRUD: 

### HabitEntry ###
* Create HabitEntry
* Read HabitEntry
* Delete HabitEntry

### Habit ###
* CRUD:

### EntryDate ###
* Create
* Read
* Delete

<h3>Wireframe:</h3>

![Screen Shot 2023-10-24 at 1 54 23 PM](https://github.com/Matt827/Atomic-Habit-Tracker/assets/122830375/ab3a128e-cc6a-449d-b67f-0437724f8de8)
![Screen Shot 2023-10-25 at 12 45 40 PM](https://github.com/Matt827/Atomic-Habit-Tracker/assets/122830375/4e854c2c-5ca8-49e2-b58a-f5e8d5b529cb)


<h3>Domain Model:</h3>

![Screen Shot 2023-10-25 at 11 25 25 AM](https://github.com/Matt827/Atomic-Habit-Tracker/assets/122830375/7f4c9b66-6f4c-482d-8d30-50ce55eb7956)


<h3>Many-to-many relationships:</h3>

### User ###
* has_many : HabitEntries
* has_many : Habits, through: HabitEntries
### Habit ###
* has_many : HabitEntries
* has_many : Users, through : HabitEntries
### HabitEntry ###
* belong_to: Habit
* belong_to: User
* has_many: EntryDates
### EntryDate ###
* belongs_to: HabitEntry

<h3>Validations:</h3>

* User must have username
* Habit must have name
* Entry must have a user and habit

<h3>Api Routes:</h3>

* GET/habits
* POST/habits
* GET/habits/<int:id>
* PATCH/habits/<int:id>
* DELETE/habits/<int:id>
* GET/users
* POST/users
* GET/users/<int:id>
* PATCH/users/<int:id>
* DELETE/users/<int:id>
* GET/HabitEntries
* POST/HabitEntries
* GET/HabitEntries/<int:id>
* PATCH/HabitEntries/<int:id>
* DELETE/HabitEntries/<int:id>


<h3>Frontend React Components:</h3>

* Main: sends a GET request to /habits
* Main: can send POST request to /HabitEntry
* Main: can send DELETE request to /HabitEntry/<int:id>
* NewHabit: sends a POST request to /habits
* Signup: sends a POST request to /user
* Login: sends a GET request to /user/<int:id>
