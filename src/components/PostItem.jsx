import React from 'react'

function componentName(props) {
    return (
        <div className="post">  
            <div className="post_content">
                {props.post.title}
                <li> TS </li>
                <li>  {props.post.body} </li>
            </div>
        </div>
    )
}

export default componentName
