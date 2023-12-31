from config import bcrypt, db
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin


class HabitEntry(db.Model, SerializerMixin):
    __tablename__ = "habit_entries"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    habit_id = db.Column(db.Integer, db.ForeignKey("habits.id"))
    entry_performed_date = db.Column(db.String)
    completed = db.Column(db.Boolean, default=False)

    user = db.relationship("User", back_populates="h_entries")
    habit = db.relationship("Habit", back_populates="h_entries")

    serialize_rules = (
        "-user.h_entries",
        "-habit.h_entries",
        "-goals.habit_entries",
    )

    def __repr__(self):
        return f"<HabitEntry {self.id}>"


class Habit(db.Model, SerializerMixin):
    __tablename__ = "habits"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    duration = db.Column(db.Integer)
    daily = db.Column(db.String)
    weekly = db.Column(db.String)
    monthly = db.Column(db.String)
    yearly = db.Column(db.String)

    # users = db.relationship(
    #     'User', secondary="habit_entries", back_populates='habits')

    h_entries = db.relationship(
        "HabitEntry", back_populates="habit", cascade="all, delete"
    )

    # users = association_proxy("habit_entries", "user")

    serialize_rules = (
        "-h_entries.habit",
        "-h_entries.user",
        "-users.habits",
    )

    @validates("name")
    def validate_name(self, key, name):
        if name and len(name) > 0:
            return name
        raise ValueError("Error, must have name greater than zero.")

    def __repr__(self):
        return f"<Habit {self.name}>"


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    age = db.Column(db.Integer)
    _password_hash = db.Column(db.String)
    image_url = db.Column(db.String)

    goals = db.relationship("Goal", backref="user", cascade="all, delete")

    # habits = db.relationship(
    #     'Habit', secondary="habit_entries", back_populates='users')

    # goals = db.relationship(
    #     'Goal', secondary="habit_entries", back_populates='users')

    h_entries = db.relationship(
        "HabitEntry", back_populates="user", cascade="all, delete"
    )

    habits = association_proxy("h_entries", "habit")

    serialize_rules = (
        "-h_entries.user",
        "-h_entries.habit",
        "-habits.users",
        "-users.habits",
        "-goals.user",
    )

    @validates("username")
    def validate_name(self, key, username):
        if username and len(username) > 0:
            return username
        raise ValueError("Error, must have username greater than zero.")

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode("utf-8"))
        self._password_hash = password_hash.decode("utf-8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf-8"))

    def __repr__(self):
        return f"<User {self.username}>"


class Goal(db.Model, SerializerMixin):
    __tablename__ = "goals"

    id = db.Column(db.Integer, primary_key=True)
    goal = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    # habit_entries = db.relationship(
    #     "HabitEntry", backref="habit", cascade="all, delete")

    serialize_rules = ("-users.goals",)

    @validates("goal")
    def validate_name(self, key, goal):
        if goal and len(goal) > 0:
            return goal
        raise ValueError("Error, must have goal greater than zero.")

    def __repr__(self):
        return f"<Goal {self.goal}>"


class EntryDate(db.Model, SerializerMixin):
    __tablename__ = "entry_dates"

    id = db.Column(db.Integer, primary_key=True)
    entry_performed_date = db.Column(db.String)
    habit_entry_id = db.Column(db.Integer, db.ForeignKey("habit_entries.id"))

    habit_entries = db.relationship(
        "HabitEntry", backref="entry_date", cascade="all, delete"
    )

    serialize_rules = ("-habit_entries.entry_date",)

    @validates("entry_performed_date")
    def validate_date(self, key, date):
        if date and len(date) > 0:
            return date
        raise ValueError("Error, must have date greater than zero.")

    def __repr__(self):
        return f"<EntryDate {self.entry_performed_date}>"