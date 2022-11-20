import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        
        <div> 
           {/* <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif"/>
             </div> */}

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello my friends"}/>
            </div>
        </div>
        
    
    )
}

export default ProfileInfo;