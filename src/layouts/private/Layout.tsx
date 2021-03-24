import React from "react";
import { Fragment } from "react";

/**
 * @ Custom components
 */
import PrivateHeader from "./Header";
import PrivateContent from "./Content";

const PrivateLayout: React.FC = () => {
    return (
        <Fragment>
            <PrivateHeader />
            <PrivateContent />
        </Fragment>
    )
}

export default PrivateLayout
