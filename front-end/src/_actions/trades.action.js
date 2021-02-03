import API from '../_services/api'
import {baseActions} from './base.actions'

export const tradesActions = {
    getData: () =>{
        return dispatch => {
            dispatch({
                type: 'GET_TRADES_REQUEST'
            })
            API.get('trades-data').then(res => {
                dispatch({
                    type: 'GET_TRADES_SUCCESS',
                    payload: res.data,
                })
            }).catch((e) => {
                baseActions.errorHanddler(dispatch, e.message, 'GET_TRADES_FAIL')
            })
        }
    }
}