import React, { useState } from 'react';

const Accordion = ({ content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            {isActive && <div className="accordion-content">{content}</div>}
            <button className='btn btn-outline-info btn-sm' onClick={() => setIsActive(!isActive)}>{isActive ? 'Read less' : 'Read more'}</button>
        </>
    );
};

export default Accordion;