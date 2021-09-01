import React from 'react'

const Comment = () => {
    return (
        <>
            <div className="comment">
                <div className="comment__avatar">
                    <img src="./images/avatar.png" alt="avatar-image" />
                </div>
                <div className="comment__txt">
                    <div className="comment__txtcontent">
                        <h2 >Rahul Gupta</h2>
                        <small>2 months ago</small>
                    </div>
                    <div className="comment__post">
                        <p>This is a great post</p>
                    </div>
                </div>
            </div>

            <div className="comment">
                <div className="comment__avatar">
                    <img src="./images/avatar.png" alt="avatar-image" />
                </div>
                <div className="comment__txt">
                    <div className="comment__txtcontent">
                        <h2 >Rahul Gupta</h2>
                        <small>2 months ago</small>
                    </div>
                    <div className="comment__post">
                        <p>This is a great post</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
