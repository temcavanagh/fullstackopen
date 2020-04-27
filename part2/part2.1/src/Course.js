import React from 'react'

const Title = ({ title }) => <h2>{title}</h2>

const Parts = ({ name, exercises }) => <p>{name}: {exercises}</p>

const Content = ({ parts }) => parts.map(each => <Parts key={each.id} name={each.name} exercises={each.exercises}/>)

const Sum = ({ parts }) => <p><strong>Total of {parts.reduce((sum, each) => sum + each.exercises, 0)} exercises</strong></p>

const Course = ({ course }) => {
    return(
        <div>
            <Title title = {course.name}/>
            <Content parts = {course.parts}/>
            <Sum parts = {course.parts}/>
        </div>
    )
}

const Curriculum = ({ courses }) => courses.map((each, index) => <Course key={each.id} course={courses[index]}/>)

export default Curriculum