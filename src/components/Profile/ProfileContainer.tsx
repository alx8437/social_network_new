import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../common/api";

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
        profileAPI.getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}  />;
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);