import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Badge,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Interstitial from "../Interstitial";
import { useContext, useState } from "react";
import GlobalContext from "@/state/global-context";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { useWishlistState } from "@/store/wishlist-store";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  root: { position: "sticky", top: 0, left: 0, right: 0, zIndex: 9999 },
  title: { cursor: "pointer" },
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  cartIcon: {
    color: theme.palette.primary.light,
  },
  Icons: {
    marginLeft: "auto",
    display: "flex",
    gap: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const route = useRouter();
  const { open_interstitial, pushObject, cart } =
    useContext(GlobalContext) ?? {};
  const { wishlistProducts } = useWishlistState();

  if (!open_interstitial && !pushObject) return null;

  const toggleDrawer =
    (open: boolean) =>
    (
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLDivElement>
    ) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      pushObject?.("open_interstitial", true);
    };

  const gotoWishListPage = () => {
    route.push("/wishlist");
  };

  return (
    <>
      <header className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Link href="/" passHref>
                <a title="SuperShop">
                  <Typography variant="h4" className={classes.title}>
                    SuperShop
                  </Typography>
                </a>
              </Link>
              <div className={classes.Icons}>
                <IconButton onClick={gotoWishListPage} size="large">
                  <Badge
                    badgeContent={wishlistProducts.length}
                    color="secondary"
                  >
                    <FavoriteIcon className={classes.cartIcon} />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={toggleDrawer(!open_interstitial)}
                  size="large"
                >
                  <Badge badgeContent={cart?.length} color="secondary">
                    <ShoppingBasketIcon className={classes.cartIcon} />
                  </Badge>
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  );
};

export default Header;
