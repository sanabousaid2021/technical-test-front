import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { useWishlistState } from "@/store/wishlist-store";
import ProductCard from "../boutique/ProductCard";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    fontSize: "22px",
  },
}));

export const ProductsWishlist = () => {
  const classes = useStyles();
  const { wishlistProducts } = useWishlistState();

  if (!wishlistProducts.length) {
    return (
      <Typography className={classes.title}>
        You dont have any product in your wishlist
      </Typography>
    );
  }

  return (
    <>
      <Typography className={classes.title}>
        Products in wishlist : {wishlistProducts.length}
      </Typography>
      <Grid container spacing={2}>
        {wishlistProducts.map((product) => (
          <Grid item xs={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
