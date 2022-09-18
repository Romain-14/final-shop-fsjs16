import { Routes, Route } from "react-router-dom";
import Home from "../Components/Main/Home";
import Shop from "../Components/Main/Shop";
import Entry from "../Components/Main/Entry/Index.entry";
import Signup from "../Components/Main/Entry/Signup";
import ValidateAccount from "../Components/Main/Entry/ValidateAccount";
import Dashboard from "../Components/Main/Entry/Dashboard";
import Admin from "../Components/Main/Admin/Panel";
import Signout from "../Components/Main/Entry/Signout";
import HOC from "../helpers/HOC";

import NotFound from "../Components/Main/NotFound";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<HOC child={Home} id="home"/>} />
            <Route path="shop" element={<HOC child={Shop} id="shop" />}/>
			<Route path="entry" element={<Entry/>}>
                <Route path="signup" element={<HOC child={Signup} id="signup" />} />
                <Route path="validateAccount/:uuid" element={<HOC child={ValidateAccount} />}/>
                <Route path="dashboard" element={<HOC child={Dashboard} id="dashboard" isAuthRequired={true}/>} />
                <Route path="signout" element={<HOC child={Signout} isAuthRequired={true}/>} />
            </Route>
            <Route path="admin" element={<HOC child={Admin} isAuthRequired={true} id="admin"/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;
