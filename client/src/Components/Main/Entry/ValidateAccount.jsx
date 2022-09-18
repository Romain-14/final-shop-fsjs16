import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateAccount } from "../../../services/API/user";

function ValidateAccount() {
    const {uuid} = useParams();
    console.log(uuid)
    const navigate = useNavigate();
    const [msg, setMsg] = useState(null)


    const validateAccountHandler = async (e) => {
        e.preventDefault();
        const datas = {
            uuid : uuid,
        }
        const res = await validateAccount(datas);
        if(res.status === 200){
            setMsg(`${res.msg}, vous serez redirigé automatiquement vers la page de connexion dans 3 secondes !!`);
            setTimeout(() => {                
                navigate("/user/signIn");
            }, 3000);
        }
    };

    return (
        <main>

        {
            msg === null ?
            <button onClick={(e) => validateAccountHandler(e)}>
            Valider votre compte
            </button>
            :
            <p>{msg}</p>
        }
        </main>
    );
}

export default ValidateAccount;
