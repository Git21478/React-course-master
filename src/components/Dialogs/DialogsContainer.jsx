import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'





let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage,
})
}

export default compose(
    connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
    withAuthRedirect
)(Dialogs)
