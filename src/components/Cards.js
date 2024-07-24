import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([])

    // we know courses haivng apiUrl data format so, now here we convert the courses data into allCourses in a single Array.  
    function getCourses() {
        // here the condition if category is title->"All" then show on UI every card
        if(category === "All") {
                let allCourses = [];
                Object.values(courses).forEach(array =>{
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
                })
                return allCourses;
        }
        else {
            // main bas specific category ka data array pass krunga
            return courses[category];

        }

    }
    
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map( (course) => (
               <Card key={course.id} 
               course={course} 
               likedCourses={likedCourses}
               setLikedCourses={setLikedCourses}/> 
            ))
            }
        </div> 
    )
}
export default Cards;