import { Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { HomePageCard } from "../home-page-card/HomePageCard";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    display: "flex",
    gap: theme.spacing(6),
    flexDirection: "column",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <HomePageCard />
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}SuperSite{new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};

export default Footer;
