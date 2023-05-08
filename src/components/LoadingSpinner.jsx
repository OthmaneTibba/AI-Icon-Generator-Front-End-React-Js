import React from "react";
import './spinner.css'

export default function LoadingSpinner(props) {
    return (
        <div className={`${props.className.toString()}`}>
            <div className="loading-spinner">
            </div>
        </div>
    );
}


