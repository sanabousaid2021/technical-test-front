import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  CardMedia,
  Theme,
} from "@mui/material";
import { useContext } from "react";
import GlobalContext from "../state/global-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
  interstitial: {
    paddingTop: "64px",
    width: "350px",
    padding: theme.spacing(2),
    paddingRight: 0,
    overflow: "hidden",
  },
  productListContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  productItem: {
    padding: theme.spacing(2),
    position: "relative",
    display: "flex",
    width: "100%",
  },

  productItemImg: {
    width: "100px",
    height: "auto",
    maxHeight: "90px",
    marginRight: theme.spacing(2),
    objectFit: "contain",
  },

  deleteIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  productItems: {
    padding: theme.spacing(2),
    height: "calc(100vh - 64px - 110px - 34px - 40px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "flex-start",
    width: "100%",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    gap: theme.spacing(2),
    alignItems: "center",
    minHeight: "36px",
  },
  commandButton: {
    marginLeft: "auto",
  },
  productItemContent: {
    flexBasis: "auto",
    width: "100%",
  },
  price: { fontWeight: 800, color: theme.palette.secondary.main },
  totalPrice: { fontWeight: 600 },
}));

const Interstitial = () => {
  const classes = useStyles();
  const context = useContext(GlobalContext);
  const cart = context?.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  });

  if (!context) return null;

  const handleRemoveProduct = (id: number) => {
    context.removeProductToCart(id);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart?.map((p) => {
      totalPrice += p?.price ?? 0;
    });
    return setTotalPrice(totalPrice);
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={context.open_interstitial}
      onClose={() => context.pushObject("open_interstitial", false)}
      onOpen={() => context.pushObject("open_interstitial", false)}
    >
      <div className={classes.interstitial}>
        <Grid
          container
          alignItems="center"
          className={classes.productListContainer}
        >
          <Grid item>
            <IconButton
              onClick={() => context.pushObject("open_interstitial", false)}
              size="large"
            >
              <ArrowBackIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.productListContainer}>
          <Grid item xs={12}>
            <Typography>
              {context.cart.length > 1
                ? `${context.cart.length} produits`
                : `${context.cart.length} produit`}
            </Typography>
          </Grid>
          <Grid className={classes.productItems}>
            {!!cart?.length &&
              cart.map(
                (product, index) =>
                  !!product && (
                    <Grid
                      item
                      xs={12}
                      key={index}
                      className={classes.productItemContent}
                    >
                      <Card className={classes.productItem}>
                        <CardMedia
                          component="img"
                          alt={product.title}
                          image={product.image}
                          title="Contemplative Reptile"
                          className={classes.productItemImg}
                        />
                        <div>
                          <Typography>{product.title}</Typography>
                          <Typography className={classes.price}>
                            {product.price} euros
                          </Typography>
                          <IconButton
                            onClick={() => handleRemoveProduct(product.id)}
                            className={classes.deleteIcon}
                            size="large"
                          >
                            <DeleteIcon color="secondary" />
                          </IconButton>
                        </div>
                      </Card>
                    </Grid>
                  )
              )}
          </Grid>
        </Grid>
        <div className={classes.footer}>
          {!!totalPrice && (
            <Typography className={classes.totalPrice}>
              Prix total :{" "}
              <span className={classes.price}>
                {totalPrice.toFixed(2)} {totalPrice > 1 ? "euros" : "euro"}
              </span>
            </Typography>
          )}
          <Button
            color="primary"
            variant="contained"
            className={classes.commandButton}
          >
            Commander
          </Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default Interstitial;
