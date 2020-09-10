import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Order from "./Order";
import BookTable from "./BookTable";

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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Carousel>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/main-image-1.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/main-image-2.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/main-image-3.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <Card>
        <Card.Body>
          <h4 id="heading-four"> The Gimzsoca RESTUARANT</h4>
          <p id="paragraph">
            Welcome to our little Delicious Nigerian & Ugandan cuisines in
            Kampala{" "}
          </p>
          <h2 id="heading-two">100% Local</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/item-two.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/item-one.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/item-two.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
          </Grid>
          <br></br>
          <h2 id="heading-two-two">NEW OUTDOOR PLACE AVAILABLE!</h2>
          <div id="container">
            {/* <Button className="reserve-button">RESERVE YOUR TABLE NOW</Button> */}
            <BookTable />
          </div>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Body>
          <h2 id="heading-two-two">ENJOY OUR CUISINES!</h2>
         

          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy1.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy2.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy3.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy4.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy5.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy6.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy7.jpg")}
                  alt=""
                  className="main-image1"
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={require("../static/images/enjoy8.jpg")}
                  alt=""
                  className="main-image1"
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
          <h4 id="heading-four"> OUR MENU</h4>
          <p id="paragraph">
            Check out for our best meals and yet at affordable prices!{" "}
          </p>
          <h2 id="heading-two">100% Local</h2>
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
                  src={require("../static/images/menu66.png")}
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
        &copy; All Rights Reserved to Gimzsoca Restuarant 2020
      </footer>
    </div>
  );
}

