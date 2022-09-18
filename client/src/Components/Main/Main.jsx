import { useDispatch, useSelector } from "react-redux";
import {setToggle} from '../../store/slices/menu.slice';

function Main({ children, id }) {
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({ ...state.menu }));

    return (
        <main id={id}>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            {children}
        </main>
    );
}

export default Main;
