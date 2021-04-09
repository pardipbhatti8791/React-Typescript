import React from "react";
import { Fragment } from "react";

/**
 * @ Custom components
 */
import PrivateHeader from "./Header";
import PrivateContent from "./Content";

const PrivateLayout: React.FC = () => {
    return (
        <div id="layout-wrapper">
            <PrivateHeader />
            <PrivateContent />
        </div>
    )
}

export default PrivateLayout
