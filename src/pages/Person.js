import "./Person.css";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import fetchData from "../utils/api";
import Button from "../components/Button";

const Person = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState();
  
  const initialPeople = async () =>
  await fetchData("https://swapi.dev/api/people/");
  
  useEffect(() => {
    const getPeople = async () => {
      const res = await initialPeople();
      setPeople(res.results);
      setPage(res.next);
    };
    getPeople();
  }, []);
  
  const pageHandler = async () => {
    if (page) {
      const res = await fetchData(page);
      setPeople([...people, ...res.results]);
      setPage(res.next);
    }
  };


  return (
    <>
      <div className="person">
        {people?.map((person) => {
          return (
            <div key={person.name}>
              <Link
                to={{
                  pathname: `/details/${person.url.match(/[0-9]+/)}`,
                }}
                style={{ textDecoration: "none" }}
              >
                <Card key={person.name}>{person.name}</Card>
              </Link>
            </div>
          );
      })}

        <Button open={pageHandler}>View More</Button>
      </div>
    </>
  );
};

export default Person;
