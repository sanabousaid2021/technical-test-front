import DefaultLayaout from "../../components/DefaultLayout";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ProductsList from "../../components/boutique/ProductsList";

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0),
  },
  filterTitle: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: `0 ${theme.spacing(2)}`,
  },
  filterListItem: {
    paddingLeft: 0,
  },
  productsListContainer: {
    padding: `0 ${theme.spacing(2)}`,
  },
  filterListContainer: {
    padding: `0 ${theme.spacing(2)}`,
  },
}));

const Boutique = () => {
  const classes = useStyles();

  return (
    <DefaultLayaout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>
              SuperShop
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.filterTitle}>
              Catégories
            </Typography>
            <div className={classes.filterListContainer}>
              <List>
                <ListItem className={classes.filterListItem}>
                  <ListItemText primary="Maquillage" />
                </ListItem>
                <ListItem className={classes.filterListItem}>
                  <ListItemText primary="Soins visage" />
                </ListItem>
                <ListItem className={classes.filterListItem}>
                  <ListItemText primary="Parfums" />
                </ListItem>
              </List>
            </div>
          </Grid>

          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            <ProductsList />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayaout>
  );
};
export default Boutique;
