import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/store";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToProps = {
    profile: ProfileType | null,
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void;
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

type ProfileContainerPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return <Profile {...this.props} profile={this.props.profile}  />;
    }
}

export default connect<MapStateToProps, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);