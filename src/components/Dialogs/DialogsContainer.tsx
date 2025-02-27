import {FC} from "react";
import {TDialogsPage} from "../../redux/store";
import {ActionTypes, sendMessageAC, updateNewMessageTextAC} from "../../redux/actionsCreators";
import Dialogs from "./Dialogs";

type TDialogContainerPropsType = {
    dialogsPage: TDialogsPage,
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer:FC<TDialogContainerPropsType> = ({dialogsPage, dispatch}) => {
    const onChangeMessageValue = (text: string) => {
        const action = updateNewMessageTextAC(text)

        dispatch(action);
    }

    const onSendMessage = () => {
        dispatch(sendMessageAC())
    }

    return (
        <Dialogs
            dialogsPage={dialogsPage}
            onChangeMessage={onChangeMessageValue}
            sendMessage={onSendMessage}
        />
    );
};

export default DialogsContainer;