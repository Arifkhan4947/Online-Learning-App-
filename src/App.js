import React from 'react'; 
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {apiUrl, filterData} from './data'; 
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
import './App.css';
import './index.css';

const App = () => {
  const [courses, setCourses] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      // whenever data is coming show loading 
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Output -> apiUrl having data in json format. 
      setCourses(output.data); //here 'data' is key in json format data so. first we go to data then we fetch the all value 
    }
    catch(error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  } 

  useEffect(() => {
    fetchData();
  },[])

 
  return (  
    <div className="min-h-screen flex flex-col bg-[#555b60]">
      <div>
        <Navbar/>
      </div>
      <div>
        <div>
          <Filter filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>

      </div>

    </div>
  )
}

export default App;
