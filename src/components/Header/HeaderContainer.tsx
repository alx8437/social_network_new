import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {AuthType, setAuthUserData} from "../../redux/authReducer";

const TOKEN = '1d420fcc-a139-409e-9feb-dfa7a2bcc2f6'
const API_KEY ='6b9c4cb8-f5dd-4538-b450-c4a8c6342a0a'

type HeaderContainerPropsType = {
    setAuthUserData: (userData: AuthType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'API-KEY': API_KEY
            }
        }).then(res => {
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