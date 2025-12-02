import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {AuthType, setAuthUserData} from "../../redux/authReducer";
import {instance} from "../../common/api";


type HeaderContainerPropsType = {
    setAuthUserData: (userData: AuthType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        instance.get(`/auth/me`).then(res => {
            if (res.data.resultCode === 0) {
               this.props.setAuthUserData(res.data.data)
            }
        })
    }


    render () {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

type MapDispatchToPropsType = {
    setAuthUserData: (userData: AuthType) => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);