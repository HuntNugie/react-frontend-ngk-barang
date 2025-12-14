import { Link, useLocation } from "react-router-dom";

export const LinkNavigation = ({path,name}) => {
    const location = useLocation();

    return (
        <Link
            to={path}
            className={
                location.pathname == path
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
            }
        >
            {name}
        </Link>
    );
};
