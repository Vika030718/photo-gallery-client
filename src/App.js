import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import JorneyList from "./screens/JorneyList";
import axios from "axios";

function App() {
  const [jorneys, setJorneys] = useState(false);
  const [message, setMessage] = useState("Data is loading");

  useEffect(() => {
    getJorneys();
  }, []);

  function getJorneys() {
    axios
      .get("/getjorneys")
      .then((response) => {
        let sorted_data = response.data.reverse();
        setJorneys(sorted_data);
      })
      .catch(function (error) {
        setMessage("There is no jorneys data available :(");
      });
  }

  function deleteJorney(id) {
    fetch(`/jorney/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        getJorneys();
      });
  }

  return (
    <>
      <Container fluid className="wrapper">
        <Row className="mt-3">
          {jorneys ? (
            jorneys.map((jorney, i) => {
              return (
                <JorneyList
                  jorney={jorney}
                  key={i}
                  onRemoveJorney={(id) => {
                    deleteJorney(id);
                    getJorneys();
                  }}
                />
              );
            })
          ) : (
            <Col className="text-center"> {message}</Col>
          )}
          <br />
        </Row>
      </Container>
    </>
  );
}

export default App;
