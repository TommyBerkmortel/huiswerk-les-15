import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css';
import Post from "../../Components/Post/Post";

function Home() {
    const [reddits, setReddits] = useState([]);

    useEffect(() => {
        async function getRedditData() {
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`)
                console.log(result.data.data.children)
                setReddits(result.data.data.children)


            } catch (e) {
                console.error(e)
            }
        }

        getRedditData()
    }, []);


    return (
        <main className="outer-container">

            <div className="inner-container">
                <div className="page-text">
                    <h2>Hottest posts</h2>
                    <h5>on Reddit right now</h5>
                </div>
                <div className="articles-container">
                    {reddits.map((reddit) => {
                        return (
                            <Post
                                key={reddit.data.id}
                                subredditTitle={reddit.data.title}
                                subredditComments={reddit.data.num_comments}
                                subredditUps={reddit.data.ups}
                            />
                        )
                    })}
                </div>
            </div>

        </main>
    );
}

export default Home;