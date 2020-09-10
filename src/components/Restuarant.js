import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import Order from "./Order";

import "../nav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Restuarant() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Card>
        <Card.Body>
          <h5 id="heading-four">OUR RESTUARANT IN PICTURES!</h5>

          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res1.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res4.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res6.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res5.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res3.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/res2.jpg")}
                  alt=""
                  className="main-image"
                />
              </Paper>
            </Grid>
           
            
          </Grid>
          <br></br>
          <div id="container">
            {/* <Button className="reserve-button">PLACE YOUR ORDER NOW</Button> */}
            <Order />
          </div>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Body>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/main-image-2.jpg")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
          </Grid>
          <br></br>
          <div id="container">
            <Order />
          </div>
        </Card.Body>
      </Card>
      <br></br>
      <Card id="footer-card">
        <Card.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4 id="footer-headings">Our story</h4>
                <p id="footer-paragraphs">
                  Gimzsoca Restaurant is an offspring of the Gimzsoca
                  International limited ménage that commenced in 2014. The
                  company has been driven with a motive to bring closer the
                  delectable and mouthwatering West African foods to EastAfrica,
                  in order to bond the two communities. The idea-as absorbed
                  from the enthusiasm, aroused by the various West African
                  movies, (widely recognized in the Eastern region of Africa)
                  has been made tangible and real.
                </p>
              </div>

              <div className="col-md-3">
                <h4 id="footer-headings"> About us</h4>
                <p id="footer-paragraphs">
                  In 2014, Gimzsoca International Limited imported its first
                  trip of Nigerian foods and eventually, by 2016 the restaurant
                  was launched, to date. In the past four years, the Gimzsoca
                  restaurant has gained popularity from serving its customers
                  with lovely delicious Nigerian and Ugandan local dishes.{" "}
                </p>
              </div>

              <div className="col-md-3">
                <h4 id="footer-headings">Our Location</h4>
                <p id="footer-paragraphs">
                  Gimzsoca Restaurant is conveniently located in Kansanga, along
                  Ggaba Road. With the vibrant view of the road/traffic, the
                  restaurant blends in a bit of an urban, yet residential
                  serenity giving our customers a fulfilled engagement with
                  their meals.{" "}
                </p>
              </div>
              <div className="col-md-3">
                <h4 id="footer-headings">Our vision</h4>
                <p id="footer-paragraphs">
                  Gimzsoca Restaurant, is envisioned to promote a spirit of
                  togetherness using the power of luscious and flavorsome
                  African foods: specifically from Uganda and Nigeria.
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <footer id="footer">
        {" "}
        &copy; All Rights Reserved to Gimzsoca Restuarant 2020
      </footer>
    </div>
  );
}
