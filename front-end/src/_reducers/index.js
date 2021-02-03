import {combineReducers} from 'redux'
import {tradeReducer as trades} from './trades.reducer';
const rootReducer = combineReducers({
    trades
})
export default rootReducer;