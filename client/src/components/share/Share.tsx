import './share.scss';
import Image from '@mui/icons-material/FilterOutlined';
import Map from '@mui/icons-material/MapTwoTone';
import Friend from '@mui/icons-material/PeopleAlt';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Share = () => {
    const { currentUser } = useContext(AuthContext);


    return(
        <div className="share">
            <div className="container">
                <div className="top">
                    <img src={currentUser.profilePicture} alt="user profile picture" />
                    <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <div className="item">
                            <Image className='icon' />
                            <span>Add Image</span>
                        </div>
                        <div className="item">
                            <Map className='icon' />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <Friend className='icon' />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;