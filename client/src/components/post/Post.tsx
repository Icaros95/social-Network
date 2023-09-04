import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';
import { IPost } from '../../interfaces/postInterface';


const Post = ({ post }: IPost) => {
    const [commentOpen, setCommentOpen] = useState(false);

    // temporal => remove
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePicture} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit'}} >
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className="date">3 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.description}</p>
                    <img src={post.image} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        { liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
                        22 likes
                    </div>
                    <div className="item" onClick={ () => setCommentOpen(!commentOpen) } >
                        4 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon /> Share
                    </div>
                </div>
                { commentOpen && <Comments /> }
            </div>
        </div>
    );
};

export default Post;