import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Badge } from "@material-ui/core";
// import { fetchProductsInCart } from "../../reducks/users/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsInCart, getUserId } from "../../reducks/users/selectors";
// import { push } from "connected-react-router";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
// import { db } from "../../firebase/index";
import MenuIcon from "@material-ui/icons/Menu";

import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Link,
  useNavigate
} from "react-router-dom";

const HeaderMenu = (props) => {
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  // const userId = getUserId(selector);
  // let productsInCart = getProductsInCart(selector);

  // Listen products in user's cart
  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection("users")
  //     .doc(userId)
  //     .collection("cart")
  //     .onSnapshot((snapshots) => {
  //       snapshots.docChanges().forEach((change) => {
  //         const product = change.doc.data();
  //         const changeType = change.type;

  //         switch (changeType) {
  //           case "added":
  //             productsInCart.push(product);
  //             break;
  //           case "modified":
  //             const index = productsInCart.findIndex(
  //               (product) => product.cartId === change.doc.id
  //             );
  //             productsInCart[index] = product;
  //             break;
  //           case "removed":
  //             productsInCart = productsInCart.filter(
  //               (product) => product.cartId !== change.doc.id
  //             );
  //             break;
  //           default:
  //             break;
  //         }
  //       });

  //       dispatch(fetchProductsInCart(productsInCart));
  //     });

  //   return () => unsubscribe();
  // }, []);

  const navigate = useNavigate();

  function toAbout (){
   navigate("/about");
  }

    function toContact() {
      navigate("/contact");
    }

  return (
    <>
      {/* <div>
        <ul>
          <li>
            <NavLink to="/" onClick={(e) => props.onClose(e)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={(e) => props.onClose(e)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={(e) => props.onClose(e)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div> */}

      <IconButton onClick={toAbout}>
        <Badge color="secondary">
          <InfoIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={toContact}>
        <ContactMailIcon />
      </IconButton>

      <IconButton
        aria-label="Menu Items"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => props.handleDrawerToggle(e, true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default HeaderMenu;
