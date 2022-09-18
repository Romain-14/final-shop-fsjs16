import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../../store/slices/user.slice";

function SignOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("u_a_u_t_h");
        dispatch(signout());
        navigate("/");
    }, []);

    return null;
}

export default SignOut;
