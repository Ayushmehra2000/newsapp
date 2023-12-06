import { Navigate } from "react-router-dom";
import { useValue } from "../../contextAPI/newsappContext";
const Protected = ({children }) => {
    const {checkLogin} = useValue();
    if (!checkLogin) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default Protected;