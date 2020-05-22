import React,{Fragment} from 'react'
import {FaWindowClose} from 'react-icons/fa'
import {connect} from "react-redux"
// import {REMOVE_ALERT} from "../../actions/Type"
import {removeAlert,setAlert} from "../../actions/Alert"
import PropTypes from 'prop-types'



function Alert(props) {
    const alert = props.alert
    const close = () => {    
        props.remove()
    }
    
    let css ='alert-container'
    if (alert.show) {
        css += " alert-show";
        if (alert.type === 'danger'){
            css += ' alert-danger'
        }
    }
    return (
        <Fragment>
        <div className={css}>
            <div className='alert'>     
                   
            <p>{alert.show && alert.msg}</p>
            <button className='alert-close' onClick={close}>
                <FaWindowClose />
            </button>
            
            </div>
        </div>
        </Fragment>
    )
}

Alert.prototype = {
    removeAlert:PropTypes.func.isRequired,
    test:PropTypes.func.isRequired,
}
const mapDispatchToProps = (dispatch) => {
    return{
    remove:()=>{dispatch(removeAlert())},
    setAlert:(msg,type)=>{dispatch(setAlert(msg,type))}
    }
}



const mapStateToProps = state => (   
    {
    alert:state.alert[0]
})

export default connect(mapStateToProps,mapDispatchToProps)(Alert)