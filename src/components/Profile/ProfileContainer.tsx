import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/store";

type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void;
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}  />;
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);