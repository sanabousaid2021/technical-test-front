import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import { Product } from "../../types/types";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    position: "relative",
  },
  thumbnailContainer: {
    textAlign: "center",
    height: "220px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    // boxShadow:
    //   "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  thumbnail: {
    maxHeight: "170px",
    width: "100%",
    margin: "auto",
    objectFit: "contain",
  },
  name: {
    fontSize: "1.1rem",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    marginBottom: 0,
    fontWeight: 800,
  },
  desc: {
    fontSize: "1rem",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
  price: {
    fontSize: "1rem",
    fontWeight: 800,
    color: theme.palette.secondary.main,
  },
  favoriteIcon: {
    position: "absolute",
    right: "5px",
    top: "5px",
    zIndex: 10,
  },
}));

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  const classes = useStyles();
  const { product } = props;
  const context = useContext(GlobalContext);

  if (!context) return null;

  const handleAddToCart = (
    _e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    context.addProductToCart(product, () =>
      context.pushObject("open_interstitial", true)
    );
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <IconButton size="large" className={classes.favoriteIcon}>
          <FavoriteBorderIcon color="secondary" />
        </IconButton>
        <div className={classes.thumbnailContainer}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title="Contemplative Reptile"
          />
        </div>
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {product.desc}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.price}
        >
          {product.price} euros
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={(e) => handleAddToCart(e, product)} size="large">
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
