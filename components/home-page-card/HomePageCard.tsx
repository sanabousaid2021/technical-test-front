import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "",
  },
  image: {
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  content: {
    display: "flex",
    padding: theme.spacing(4),
    alignItems: "center",
  },
  list: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
  },
  itemList: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(3),
    alignItems: "center",
  },
  icon: {},
  text: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
}));

export const HomePageCard = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid xs={12} md={4} lg={6} className={classes.image}>
        <img src="/static/images/homepage-box-image.jpg" alt="Blissim card" />
      </Grid>
      <Grid xs={12} md={8} lg={6} className={classes.content}>
        <ul className={classes.list}>
          <li className={classes.itemList}>
            <div className={classes.icon}>
              <img src="/static/images/icon.svg" alt="icon" />
            </div>
            <div className={classes.text}>
              <Typography variant="h3">Un accompagnement sur-mesure</Typography>
              <Typography variant="body1">
                Blissim c’est une box mensuelle sans engagement, mais aussi des
                offres exclusives et un <strong>e-shop généreux</strong>.
                Profitez de nos conseils personnalisés et de nos vidéos
                accessibles gratuitement.
              </Typography>
            </div>
          </li>
          <li className={classes.itemList}>
            <div className={classes.icon}>
              <img src="/static/images/icon.svg" alt="icon" />
            </div>
            <div className={classes.text}>
              <Typography variant="h3">10 ans d’expertise beauté</Typography>
              <Typography variant="body1">
                N°1 de l’abonnement beauté en Europe, Blissim c’est déjà plus de{" "}
                <strong>250 000 clients</strong> déjà conquis. Label trustpilot
              </Typography>
            </div>
          </li>
          <li className={classes.itemList}>
            <div className={classes.icon}>
              <img src="/static/images/icon.svg" alt="icon" />
            </div>
            <div className={classes.text}>
              <Typography variant="h3">Nos engagements</Typography>
              <Typography variant="body1">
                Nous travaillons avec des partenaires beauté et des experts
                toujours plus engagés, pour vous proposer une sélection{" "}
                <strong>personnalisée</strong> de soins de qualité et le plus
                naturels possibles.
              </Typography>
            </div>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
