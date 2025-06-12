import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {sendMessageAC, TDialogsPage, updateNewMessageTextAC} from "../../redux/dialogsReducer";

type MapStateToPropsType = {
    dialogsPage: TDialogsPage
}

type MapDispatchToPropsType = {
    onChangeMessage: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;