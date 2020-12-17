import React from 'react'

export default function DummyStatusBar() {
    return (
        <>
            <img 
            className="status-dummy"
            src={`${process.env.PUBLIC_URL}/assets/images/status-bar-dummy.png`} 
            alt="Status bar dummy"
            />
        </>
    )
}
