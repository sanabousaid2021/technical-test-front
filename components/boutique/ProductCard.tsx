import { useContext } from "react";
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

import GlobalContext from "@/state/global-context";
import { Product } from "@/types/types";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { useWishlistActions, useWishlistState } from "@/store/wishlist-store";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

const ProductCard = ({ product }: Props) => {
  const classes = useStyles();

  const context = useContext(GlobalContext);

  const { updateWishlist } = useWishlistActions();
  const { wishlistProducts } = useWishlistState();

  if (!context) return null;

  const handleAddToCart = (
    _e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    context.addProductToCart(product, () =>
      context.pushObject("open_interstitial", true)
    );
  };

  const handleAddToWishlist = (
    _e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    updateWishlist(product);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <IconButton
          onClick={(e) => handleAddToWishlist(e, product)}
          size="large"
          className={classes.favoriteIcon}
        >
          {wishlistProducts.find(
            (wishlistproduct) => wishlistproduct.id === product.id
          ) ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon color="secondary" />
          )}
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
