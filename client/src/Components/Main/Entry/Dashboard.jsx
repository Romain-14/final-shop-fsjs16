import { useEffect,useState } from "react";
import { getUser } from "../../../services/API/user";
import DisplayInfos from "./DisplayInfos";

const TOKEN = localStorage.getItem("u_a_u_t_h");

function Dashboard({userInfosStore}) {
	const [purchaseInfos, setPurchaseInfos] = useState(null);
	const [displayInfos, setDisplayInfos] = useState({user: true, purchase: false});

    return(
		<>
			{
				!userInfosStore ? <p>loading....</p>
				:
				<>
				<ul>
					<li 
						className={displayInfos.user ? "active" : undefined} 
						onClick={!displayInfos.user ? ()=> setDisplayInfos({user: true, purchase: false}) : null}
					>Identity</li>
					<li
						className={displayInfos.purchase ? "active" : undefined}
						onClick={!displayInfos.purchase ?()=> setDisplayInfos({user: false, purchase: true}) : null }
					>Order</li>
				</ul>
				<DisplayInfos infos={displayInfos.user ? {user: userInfosStore} : {purchase: purchaseInfos}} />
				</>		
			}
			


		</>
	)
	
}

export default Dashboard;