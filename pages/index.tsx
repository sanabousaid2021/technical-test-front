import DefaultLayaout from "../components/DefaultLayout";
import { Button, Container, Grid, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { HomePageCard } from "../components/home-page-card/HomePageCard";

const useStyles = makeStyles((theme: Theme) => ({
  container: { marginTop: theme.spacing(5) },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <DefaultLayaout>
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          SuperShop
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>

        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link href="/boutique" passHref>
                <Button variant="contained" component="a">
                  La Boutique
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </DefaultLayaout>
  );
};
export default Home;
