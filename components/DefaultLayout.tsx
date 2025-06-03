import Header from "./header/Header";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

// ===== Basic Layout ===== //
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
}));
type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/*Header*/}
      <Header />

      <main>{props.children}</main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
