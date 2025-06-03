import { createContext, Component, ReactNode, SetStateAction } from "react";
import PropTypes from "prop-types";
import { Product } from "../types/types";

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalProviderState {
  open_interstitial: boolean;
  cart: Array<Product | undefined>;
  pushObject: <K extends keyof GlobalProviderState>(
    key: K,
    value: GlobalProviderState[K],
    callback?: () => void
  ) => void;
  getCart: () => void;
  addProductToCart: (product: Product, callback: () => void) => void;
  removeProductToCart: (id: number, callback?: () => void) => void;
}
const GlobalContext = createContext<GlobalProviderState | undefined>(undefined);

export class GlobalProvider extends Component<
  GlobalProviderProps & { children: React.ReactNode },
  GlobalProviderState
> {
  constructor(props: GlobalProviderProps) {
    super(props);
    this.state = {
      open_interstitial: false,
      cart: [],
      pushObject: this.pushObject.bind(this),
      getCart: this.getCart.bind(this),
      addProductToCart: this.addProductToCart.bind(this),
      removeProductToCart: this.removeProductToCart.bind(this),
    };
  }

  pushObject<K extends keyof GlobalProviderState>(
    key: K,
    value: GlobalProviderState[K],
    callback?: () => void
  ) {
    this.setState({ [key]: value } as Pick<GlobalProviderState, K>, callback);
  }

  getCart() {
    const sessionStorageCart = sessionStorage.getItem("cart");
    if (sessionStorageCart) {
      this.setState({ cart: JSON.parse(sessionStorageCart) });
    } else {
      this.setState({ cart: [] });
    }
  }

  addProductToCart(product: Product, callback: () => void) {
    const newCart = [...this.state.cart];
    newCart.push(product);
    this.setState({ cart: newCart }, () => {
      sessionStorage.setItem("cart", JSON.stringify(newCart));

      if (typeof callback !== "undefined") callback();
    });
  }

  removeProductToCart(id: number, callback?: () => void) {
    const newCart = [...this.state.cart];
    const ProductIndex = newCart.findIndex((p) => p?.id === id);
    console.log({ ProductIndex, newCart, id });
    newCart.splice(ProductIndex, 1);
    this.setState({ cart: newCart }, () => {
      //if (newCart) sessionStorage.setItem("cart", JSON.stringify(newCart));
      if (typeof callback !== "undefined") callback();
    });
  }

  componentDidMount() {
    this.getCart();
  }

  render() {
    const { children } = this.props;

    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        {children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
