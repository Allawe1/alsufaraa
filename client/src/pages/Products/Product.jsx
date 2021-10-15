import {
  Card,
  Container,
  Divider,
  Grid,
  Typography,
  CardActionArea,
  Fade,
  Modal,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import product1 from "../../images/product1.jpg";
import { getProductGategorysProduct } from "../../redux/actions/productGategory";
import { useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
export function Products(props) {
  const classes = useStyles();
  var emp = useLocation();
  if (emp.state === undefined) {
    emp = {
      hash: "",
      key: "kgq3y4",
      pathname: "/products",
      search: "",
      state: "Arabic",
    };
  }
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState({
    name: "",
    img: "",
    ingredients: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    axios
      .get(`https://alsufraa.herokuapp.com/api/productGategorys/products/${emp.state}`)
      .then((response) => {
        setIsLoading(false);
        setNotes(response.data[0].product);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    
  }, []);
  console.log(emp.state );
  if (isLoading) {
    return <div>Loading...</div>;
  }

 console.log(notes);
  // const dispatch = useDispatch();
  // console.log(emp.state);
  // useEffect(() => {
  //   dispatch(getProductGategorysProduct(emp.state));
  // }, [dispatch]);

  // var productGategorys = useSelector((state) => state.productGategorys.data);
  // console.log(productGategorys);
  // const productGategoryName = ["arabic", "tanor", "cake", "pastry", "toast"];
  //  var selectedGatogary='arabic';
 
  // if (
  //   notes[0].productGategory  == "6144e629e151f5246478a862"
  // ) {
  //   selectedGatogary = productGategoryName[0];
  // } else if (
  //   notes[0].productGategory == "6144b6996840c728943b15d4"
  // ) {
  //   selectedGatogary = productGategoryName[2];
  // } else if (
  //   notes[0].productGategory == "6144b6ac6840c728943b15d8"
  // ) {
  //   selectedGatogary = productGategoryName[3];
  // } else if (
  //   notes[0].productGategory  == "6144b6a36840c728943b15d6"
  // ) {
  //   selectedGatogary = productGategoryName[1];
  // } else if (
  //   notes[0].productGategory  == "615f0478d01dc03d889d09d8"
  // ) {
  //   selectedGatogary = productGategoryName[4];
  // }

  // productGategorys[0].product = productGategorys[0].product.filter(
  //   (item) => item.availability === "yes"
  // );

  
  const handleClose = () => {
    setOpen(false);
  };
  // const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
 
  function sendProduct(elem) {
    if (isTabletOrMobile) {
      props.history.push({ pathname: "/productDetails", state: elem });
    } else {
      setProduct({
        name: elem.name,
        img: elem.img,
        description: elem.description,
        ingredients: elem.ingredients,
      });
      setOpen(true);
    }
  }

  return (
    <div className={classes.main}>
      <Typography variant="h2" className={classes.h2}>
        Welcome to our Products!
      </Typography>
      <Divider variant="inset" className={classes.bigDivider} />
      <Typography variant="h1" className={classes.h1}>
        Choose what you are looking for
      </Typography>
      <Divider variant="inset" className={classes.smallDivider} />
      <Grid
        id="grid"
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        className={classes.productGrid}
      >
        {notes.map((elem) => (
          <Grid item xs="auto" key={elem._id}>
            <div>
              <Card className={classes.card1}>
                <CardActionArea onClick={() => sendProduct(elem)}>
                  <img
                    src={
                      elem.img !== ""
                        ? `https://alsufraa.herokuapp.com/images/${emp.state}/${elem.img}`
                        : product1
                    }
                    alt="product"
                    title={elem.img}
                    className={classes.media}
                  />
                </CardActionArea>
              </Card>
              <Typography className={classes.overlaySmall}>
                {elem.name}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container justifyContent="center" direction="row" spacing={4}>
              <Grid xs={6} item>
                <img
                  width={400}
                  height={500}
                  src={
                    product.img !== ""
                      ? `http://localhost:5000/images/${emp.state}/${product.img}`
                      : product1
                  }
                  alt="product"
                  title={product.img}
                  className={classes.image}
                />
              </Grid>
              <Grid xs={6} item>
                <Container>
                  <Typography className={classes.productHeader}>
                    {product.name}
                  </Typography>
                  <Divider
                    variant="inset"
                    className={classes.productSmallDivider}
                  />
                  <Typography className={classes.ProductTitle}>
                    description
                  </Typography>
                  <Typography className={classes.ProductInfo}>
                    {product.description}
                  </Typography>
                  <Divider
                    variant="inset"
                    className={classes.productBigDivider}
                  />
                  <Typography className={classes.ProductTitle}>
                    ingeridaints
                  </Typography>
                  <Typography className={classes.ProductInfo}>
                    {product.ingredients}
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
