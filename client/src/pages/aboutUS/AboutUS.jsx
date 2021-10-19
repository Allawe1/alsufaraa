import { Container, Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
function AboutUS() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.main}>
      <div className={classes.home}>
      <Typography className={classes.mainHeader}>
        About Alsufra Bakery{" "}
      </Typography>
      <Divider variant="inset" className={classes.bigDivider} />
      <Grid
        direction="row"
        container
        spacing={4}
        justifyContent="center"
        alignItems='center'
      >
        <Grid xs='auto' lg={6} item>
          <img
            className={classes.image}
            src="http://patisseriemaxime.co.uk/wp-content/uploads/2015/05/about-us.png"
            alt='aboutUs'
            title = 'aboutUs'
          />
        </Grid>
        <Grid item xs='auto' lg={6}  container   >
          <Container>
            <Typography className={classes.header}>Alsufra Bakery</Typography>
            <Divider variant="inset" className={classes.smallDivider} />
            <Typography className={classes.text1}>
              Ignorant branched humanity led now marianne too strongly entrance.
              Rose to shew bore no ye of paid rent form. Old design are dinner
              better nearer silent excuse. She which are maids boy sense her
              shade. Considered reasonable we affronting on expression in. So
              cordial anxious mr delight. Shot his has must wish from sell nay.
              Remark fat set why are sudden depend change entire wanted.
              Performed remainder attending led fat residence far.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default AboutUS;
