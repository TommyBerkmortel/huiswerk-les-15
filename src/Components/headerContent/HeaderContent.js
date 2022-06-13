import React from 'react';

function HeaderContent({extraTitleInfo, pageTitle, image}) {
    return (
        <div className="logo-frame">
            {image}
            <h1>{pageTitle}</h1>
            <h5>{extraTitleInfo}</h5>
        </div>
    );
}

export default HeaderContent;