import React, { useState, useEffect } from "react";
import Loading from "../Components/ui/Loading";
import Card from '../Components/ui/Card'
import FacultyList from "../Components/ui/FacultyList";

const HomePage = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:5000/api/";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();

        console.log(response);
        throw response;
      })
      .then((data) => {
        const {faculties, flag} = data;
        // console.log(faculties, flag);
        setFacultyData(faculties);
        // console.log(facultyData);
      })
      .catch((err) => {
        console.log("error occured while fetching data", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1>Faculties</h1>
        Faculties Cards will be displayed

        <FacultyList faculties = {facultyData} />

      </div>
    );
  }
};

export default HomePage;
