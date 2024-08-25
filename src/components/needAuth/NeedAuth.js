import { useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


function NeedAuth(props) {
    const {loading, user} = useSelector(state => state.auth);
    if (loading) {
        return "Load user data"
    }

    if (!loading && user) {
        return props.children;
    }

    if (!loading && !user) {
        // return <Navigate to="/"/>
        return(<div style={{fontSize:'50px',textAlign:'center',marginTop:'20px'}} > Для использования корзины необходимо авторизоваться</div>)
    }
}

export default NeedAuth;