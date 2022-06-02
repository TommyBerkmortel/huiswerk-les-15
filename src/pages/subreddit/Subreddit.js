import React from 'react';
import {useParams} from "react-router-dom";

function Subreddit() {
    const { id } = useParams();
    console.log(id);

    return (

        <div className="outer-container">
            <div className="inner-container">
                <h1>Subreddit</h1>

            </div>
        </div>
    );
}

export default Subreddit;