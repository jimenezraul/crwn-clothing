import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {currentUser ? (
        currentUser.photoURL ? (
                    <div className="profile-option">
                        <CartIcon />
                        <img className="profile-pic" src={currentUser.photoURL} />
                        
          </div>
        ) : (
          <img />
        )
      ) : null}
        </div>
        <CartDropdown />
  </div>
);
const mapStatesToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStatesToProps)(Header);
