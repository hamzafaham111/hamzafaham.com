import React from 'react'
const DoneModal = (Props) => {
    if (!Props.isVisable) return null;

    const handleClose = (e) => {
        if (e.target.id === "modal") Props.onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center' id='modal' onClick={handleClose}>
            <div className='p-2 mx-2'>
                <div className='flex justify-between'>
                    <span className={`text-gray-500 font-semibold ${Props.title == "undefine" ? "hidden" : "block"}`}>{Props.title}</span>
                </div>
                <div>
                    {Props.children}
                </div>
            </div>
        </div>
    )
}

export default DoneModal