import React from "react";

function Alert(props) {
    const toUpper = (word) => {
        let str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div style={{ height: '55px' }} className="my-2">
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
                <strong>{toUpper(props.alert.type)}</strong> {props.alert.msg}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            </div>}
        </div>
    );
}

export default Alert;
