import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles({
  card: {
    minWidth: 500
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    borderBottom: "1px solid black",
    marginBottom: 20,
    marginTop: 30,
    paddingBottom: 30,
    fontFamily: "Luminari, fantasy"
  },
  exp: {
    marginLeft: 50,
    marginRight: 50,
    fontSize: 25,
    backgroundColor: "#d9d9d9",
    backgroundImage: "linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)",
    borderRadius: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 30
  },
  date: {
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "Luminari, fantasy"
  }
});

const Image = styled.img`
  margin-top: 10px;
  border-radius: 20px;
`;

function Apod() {
  const [pic, setPic] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=KmrVhRcmF8faKX9gaPlOHq9PGxATwgJQrdZCFZ6D"
      )
      .then(response => {
        setPic(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("SIKE", error);
      });
  }, []);

  return (
    <Container>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.date} variant="h3" component="h2">
            Date : {pic.date}
          </Typography>
          <Image
            className="space_pic"
            alt="random space pic"
            src={pic.url}
          ></Image>
          <Typography className={classes.title}> {pic.title}</Typography>
          <Typography className={classes.exp} variant="body2" component="p">
            {pic.explanation}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Apod;
