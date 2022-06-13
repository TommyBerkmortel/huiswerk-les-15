import React from 'react';
import {Link} from "react-router-dom";
import './Post.css';

function Post({subredditTitle, subredditComments, subredditUps,subredditUrl, subredditName, subredditid}) {
    return (
        <article className="post">
            <a className="subredditLink" href={subredditUrl} target="_blank"><h2>{subredditTitle}</h2></a>
            <div className="article-bottum">
                <Link to={`/subreddit/${subredditid}`}>{subredditName}</Link>
                <span>Comments {subredditComments} - Ups {subredditUps}</span>
            </div>
        </article>
    );
}

export default Post;

// title linkt door naar de echte subreddit post
// naam subreddit linkt door naar subreddit-specificatie pagina
// comments     ups