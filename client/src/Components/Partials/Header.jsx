import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faUser,
    faMagnifyingGlass,
    faXmark,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import {setToggle} from '../../store/slices/menu.slice'

function Header() {
    const dispatch = useDispatch();
    const { userInfos, isLogged, isToggle } = useSelector((state) => ({ ...state.user, ...state.menu }));

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <header>
            <h1>GameOver</h1>

            {widthScreen < 768 && (
                <button
                    className="burger-btn"
                    onClick={() => dispatch(setToggle(!isToggle))}
                >
                    <FontAwesomeIcon icon={!isToggle ? faBars : faXmark} size="2x"/>
                </button>
            )}
            <nav
                className={
                    widthScreen < 768
                        ? !isToggle
                            ? "hide"
                            : "burger-nav"
                        : "nav"
                }
            >
                <Link to="/" onClick={() => dispatch(setToggle(!isToggle))}>Home</Link>
                <Link to="shop" onClick={() => dispatch(setToggle(!isToggle))}>Shop</Link>
                {!isLogged ? (
                    <Link to="entry" onClick={() => dispatch(setToggle(!isToggle))}>Sign in/up</Link>
                ) : (
                    <>
                        {
                            userInfos.role_id === 1 ? 
                                <Link to="admin" onClick={() => dispatch(setToggle(!isToggle))}>Panel Admin</Link>
                                :
                                <Link to="entry/dashboard" onClick={() => dispatch(setToggle(!isToggle))}>Dashboard</Link>
                        }
                        <Link to="entry/signout" onClick={() => dispatch(setToggle(!isToggle))}>Sign out</Link>
                    </>
                )}
            </nav>

        </header>
    );
}

export default Header;
