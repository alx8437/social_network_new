import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void;
}

type PathParamsType = {
    userId: string,
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let { userId } = this.props.match.params

        if (!userId) {
            userId = "2"
        }
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}  />;
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);