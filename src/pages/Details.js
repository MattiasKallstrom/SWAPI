import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useParams, Link } from "react-router-dom";
import fetchData from "../utils/api";

const Details = () => {
  const [people, setPeople] = useState(null);
  const { id } = useParams();
  const initialPerson = async () => await fetchData(`https://swapi.dev/api/people/${id}/`)
 
  useEffect(() => {
    const fetchPeople = async () => {
      const data = await initialPerson();
      setPeople(data);
    }
    fetchPeople();
  }, [id]);
  
  return (
    <>
      <div className="person">
        {people && (
          <>
            <List>
              <h2>Name: {people.name}</h2>
              <p>Height: {people.height}</p>
              <p>Mass: {people.mass}</p>
              <p>Gender: {people.gender}</p>
              <p>Birth Year: {people.birth_year}</p>
              <Link
                to={{ pathname: "/" }}
                style={{
                  background: "black",
                  color: "white",
                  textDecoration: "none",
                  border: "2px solid white",
                  borderRadius: "24px",
                  padding: "11px",
                  cursor: "pointer",
                }}
              >
                Back
              </Link>
            </List>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
