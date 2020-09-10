import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";


import "../nav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    fontFamily:"Times New Roman, Times, serif",
    color: "#034d43",
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Card.Body>
          <h4 id="heading-four"> ABOUT US</h4>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <h3>About us:</h3>
                <p>
                  In 2014, Gimzsoca International Limited imported its first
                  trip of Nigerian foods and eventually, by 2016 the restaurant
                  was launched, to date. In the past four years, the Gimzsoca
                  restaurant has gained popularity from serving its customers
                  with lovely delicious Nigerian and Ugandan local dishes.{" "}
                </p>
                <h3>Our Story:</h3>
                <p>
                  Gimzsoca Restaurant is an offspring of the Gimzsoca
                  International limited ménage that commenced in 2014. The
                  company has been driven with a motive to bring closer the
                  delectable and mouthwatering West African foods to EastAfrica,
                  in order to bond the two communities. The idea-as absorbed
                  from the enthusiasm, aroused by the various West African
                  movies, (widely recognized in the Eastern region of Africa)
                  has been made tangible and real.
                </p>
                <h3>Our Vision: </h3>
                <p>
                  Gimzsoca Restaurant, is envisioned to promote a spirit of
                  togetherness using the power of luscious and flavorsome
                  African foods: specifically from Uganda and Nigeria.
                </p>

                <h3> Our Location:</h3>
                <p>
                  Gimzsoca Restaurant is conveniently located in Kansanga, along
                  Ggaba Road. With the vibrant view of the road/traffic, the
                  restaurant blends in a bit of an urban, yet residential
                  serenity giving our customers a fulfilled engagement with
                  their meals.{" "}
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
      <footer id="footer">
        {" "}
        &copy; All Rights Reserved to Gimzsoca Restuarant 2020
      </footer>
    </div>
  );
}
