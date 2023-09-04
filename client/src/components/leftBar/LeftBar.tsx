import './leftbar.scss';
import Friends from '@mui/icons-material/ThreePOutlined';
import Groups from '@mui/icons-material/Diversity3Outlined';
import Market from '@mui/icons-material/StorefrontOutlined';
import Watch from '@mui/icons-material/SmartDisplayOutlined';
import Memories from '@mui/icons-material/ShutterSpeedOutlined';
import Events from '@mui/icons-material/CalendarMonthOutlined';
import Gaming from '@mui/icons-material/SportsEsportsOutlined';
import Gallery from '@mui/icons-material/CollectionsOutlined';
import Video from '@mui/icons-material/VideoCameraFrontOutlined';
import Messages from '@mui/icons-material/EmailOutlined';
import Tutorials from '@mui/icons-material/CastForEducationOutlined';
import Courses from '@mui/icons-material/LocalLibraryOutlined';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';


const LeftBar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePicture} 
                              alt="profile picture" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <Friends />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <Groups />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <Market />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <Watch />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <Memories />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shorcuts</span>
                    <div className="item">
                        <Events />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <Gaming />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <Gallery />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <Video />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <Messages />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <Tutorials />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <Courses />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;