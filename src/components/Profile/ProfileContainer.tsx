import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void;
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
        this.props.setUserProfileTC(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}  />;
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent);