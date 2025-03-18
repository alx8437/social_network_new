import {sendMessageAC, updateNewMessageTextAC} from "../../redux/actionsCreators";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const onChangeMessageValue = (text: string) => {
                    const action = updateNewMessageTextAC(text)

                    store.dispatch(action);
                }

                const onSendMessage = () => {
                    store.dispatch(sendMessageAC())
                }


                return <Dialogs
                    dialogsPage={store.getState().dialogsPage}
                    onChangeMessage={onChangeMessageValue}
                    sendMessage={onSendMessage}
                />
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;