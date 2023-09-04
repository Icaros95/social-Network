import './profile.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts';


const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img className='cover' src="https://images.unsplash.com/photo-1693462135458-22f289177360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className='profilePicture' src="https://images.unsplash.com/photo-1687304627965-6624122fe073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile picture" />
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookOutlinedIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize='large' />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize='large' />
                        </a>
                    </div>
                    <div className="center">
                        <span>Kim Dokja</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>Seoul</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>Korean</span>
                            </div>
                            <button>follow</button>
                        </div>
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;