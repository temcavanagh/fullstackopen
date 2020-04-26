import React from 'react'

const Title = ({ title }) => <h1>{title}</h1>

const Parts = ({ name, exercises }) => <p>{name}: {exercises}</p>

const Content = ({ parts }) => parts.map(each => <Parts key={each.id} name={each.name} exercises={each.exercises}/>)

const Course = ({ course }) => {
    return(
        <div>
            <Title title = {course.name}/>
            <Content parts = {course.parts}/>
        </div>
    )
}

export default Course