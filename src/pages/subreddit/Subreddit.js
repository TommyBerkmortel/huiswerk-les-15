import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    /*const { id } = useParams();
    console.log(id);*/

    const [reddits, setReddits] = useState([]);

    useEffect(() => {
        async function getRedditData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/memes/about.json`)
                console.log(result.data.data)
                setReddits(result.data.data)

            } catch (e) {
                console.error(e)
            }
        }

        getRedditData()
    }, []);

    return (

        <div className="outer-container">
            <div className="inner-container">
                <h1>Subreddit</h1>
                <h3>Title</h3>
                <p>{reddits.title}</p>
                <h3>Description</h3>
                <p>{reddits.public_description}</p>
                <h3>Number of subscribers</h3>
                <p>{reddits.subscribers}</p>

            </div>
        </div>
    );
}

export default Subreddit;

