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

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Card.Body>
          <h4 id="heading-four"> OUR MENU</h4>
          <p id="paragraph">
            Check out for our best meals and yet at affordable prices!{" "}
          </p>
          <h2 id="heading-two">100% Local</h2>
          <div id="container">
            <Order />
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu11.jpg")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu22.jpg")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu33.jpg")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu44.png")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu55.png")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu66.png")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/just.png")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/menu77.png")}
                  alt=""
                  className="menu-image"
                />
              </Paper>
            </Grid>
          </Grid>
          <br></br>
          <h2 id="heading-two-two">NEW OUTDOOR PLACE AVAILABLE!</h2>
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
        &copy; All Rights Reserved to Gimzsoca Restuarant 2020 <br></br>
        Designed and Developed by Tusime Godwin call me on{" "}
        <a href="tel:+256759755313" id="footer-link">
          {" "}
          +2567013938916
        </a>
      </footer>
    </div>
  );
}
