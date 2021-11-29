import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/Context";

const MoreOptions = () => {
    const c = useContext(Context);

    return (
        <Fragment>
            <div className="more-options animate__animated animate__fadeIn animate__faster">
                <div className="edit-todos">Edit</div>
                <div className="manage-catergories">Manage Categories</div>
                <Link to="/about">About</Link>
            </div>
            <div
                className="close-categoriSelect"
                onClick={c.handleSetShowMoreOptions}
            ></div>
        </Fragment>
    );
};

export default MoreOptions;
