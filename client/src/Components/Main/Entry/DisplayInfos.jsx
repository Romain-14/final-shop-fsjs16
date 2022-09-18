import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import EditForm from "./EditForm";

function DisplayInfos({ infos }) {
    const { user } = infos;
    const [userInfos, setUserInfos] = useState({
        email: user?.email,
        alias: user?.alias || "",
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        address: user?.address || "",
        zip: user?.zip || "",
        city: user?.city || "",
        phone: user?.phone || "",
    });
    const [showForm, setShowForm] = useState(false);

    const togglePopupForm = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    };

    const whatToDisplay = () => {
        if (Object.keys(infos)[0] === "purchase") {
            if (!infos.purchase) {
                return (
                    <p>
                        You don't have any purchase order yet ! go{" "}
                        <Link to={"/shop"}>now</Link>
                    </p>
                );
            } else {
                <p>my cart soon</p>;
            }
        }
        if (Object.keys(infos)[0] === "user") {
            return (
                <article className="ctn ctn-user">
                    <ul>
                        <li>{userInfos?.alias || "'no alias yet'"}</li>
                        <li>{userInfos?.firstname || "'no firstname set'"}</li>
                        <li>{userInfos?.lastname || "'no lastname set'"}</li>
                        <li>{userInfos?.address || "'no address set'"}</li>
                        <li>{userInfos?.zip || "'no zip set'"} {userInfos?.city || "'city set'"}</li>
                        <li></li>
                    </ul>
                    <button onClick={(e)=>togglePopupForm(e)}>edit</button>
                </article>
            );
        }
    };

    return (
        <>
            {showForm && <EditForm userState={[userInfos, setUserInfos]} togglePopupForm={togglePopupForm}/>}

            <section>{whatToDisplay()}</section>
        </>
        )
}

export default DisplayInfos;
