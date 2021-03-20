import Preloader from '../../Common/Preloader/Preloader';
import './profileInfo.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"></img>
            </div>

            <div className="profile-avatar">
                <img src={props.profile.photos.large} alt='no image' />
        ava + description
      </div>
        </div>
    );
};

export default ProfileInfo;
