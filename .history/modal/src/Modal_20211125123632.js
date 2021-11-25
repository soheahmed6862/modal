import React from 'react'

function Modal({closemodal}) {
    const handleClose=()=>{
        closemodal(false);
    }
    return (
        <div>
            <button onClick={handleClose}>
                cancle
            </button>
            modal is open
        </div>
    )
}

export default Modal
