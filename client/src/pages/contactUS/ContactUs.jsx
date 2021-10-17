import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import emailjs from "emailjs-com";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMobile , faLocationArrow , faEnvelope} from "@fortawesome/free-solid-svg-icons";
library.add(faClock, faMobile , faLocationArrow , faEnvelope);

export function ContactUs() {
  const classes = useStyles();

  function sendEmail(e) {
    console.log("submit");
    e.preventDefault();
    var value = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log(value);
    console.log(e.target);

    emailjs
      .sendForm(
        "service_ozue4k9",
        "template_o57magr",
        e.target,
        "user_Adwdn8MxIFhGPFYBogyW0"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    resetForm();
  }
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.main}>
      <div>
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid>
          <div>
            <Typography className={classes.header}>
              Write us a message
            </Typography>
            <Divider variant="inset" className={classes.smallDivider} />
            <form onSubmit={sendEmail}>
              <div>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  style={{ margin: 8, bottom: 20, top: 20 }}
                  placeholder="Enter your name"
                  margin="auto"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                style={{ margin: 8, bottom: 20, top: 20 }}
                placeholder="Enter your email"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                style={{ margin: 8, bottom: 20, top: 20 }}
                rows={10}
                cols={40}
                placeholder="Enter your message"
                variant="outlined"
              />

              <div style={{ marginTop: 50 }}>
                <input type="submit" value="SEND" className={classes.submit} />
              </div>
            </form>
          </div>
        </Grid>
        <Grid xs="auto" item>
          <Container>
            <Typography className={classes.header}>Contact US</Typography>
            <Divider variant="inset" className={classes.smallDivider1} />
            <Grid
              container
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs="auto">
                <Card className={classes.card}>
                  <CardContent>
                    <FontAwesomeIcon
                      icon="clock"
                      size="2x"
                      style={{ float: "left", marginRight: 10, marginTop: 2 }}
                    />
                    <Typography className={classes.text}>
                      OPENING HOURS
                    </Typography>
                    <Typography className={classes.text1}>
                      i dont know
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs="auto">
                <Card className={classes.card}>
                  <CardContent>
                  <FontAwesomeIcon
                      icon="location-arrow"
                      size="2x"
                      style={{ float: "left", marginRight: 10, marginTop: 2 }}
                    />
                    <Typography className={classes.text}> ADDRESS</Typography>
                    <Typography className={classes.text1}>
                      i dont know
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs="auto">
                <Card className={classes.card}>
                  <CardContent>
                  <FontAwesomeIcon
                      icon="mobile"
                      size="2x"
                      style={{ float: "left", marginRight: 10, marginTop: 2 }}
                    />
                    <Typography className={classes.text}>
                      {" "}
                      PHONE NUMBER
                    </Typography>
                    <Typography className={classes.text1}>
                      i dont know
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs="auto">
                <Card className={classes.card}>
                  <CardContent>
                  <FontAwesomeIcon
                      icon="envelope"
                      size="2x"
                      style={{ float: "left", marginRight: 10, marginTop: 2 }}
                    />
                    <Typography className={classes.text}>EMAIL</Typography>
                    <Typography className={classes.text1}>
                      i dont know
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default ContactUs;
