import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfile extends Component {
    render(){
        const {link, image} = this.props.socialProfile
        return(
            <div style={{ textAlign:'center', display:'inline-block', width:"7%", marginLeft:'7%', marginRight:'7%' }}>
                <a href={link}> <img style={{ width:"100%" }} src={image} alt="social-profile"/></a>
            </div>
        );
    }
}

class SocialProfiles extends Component{
    render () {
        return (
            <div>
                <h2>Connect with me</h2>

            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                    })
                }
            </div>

            </div>
        )


    }


}

export default SocialProfiles;