const initialState = {
    loading: false,
    openTrendData: {},
    tradingWalletData: {},
    tradingData: []
}

export function tradeReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TRADES_REQUEST':
            return {
                ...state,
                loading: true
            }
            case 'GET_TRADES_FAIL':
                    return {
                        ...state,
                        loading: false
                    }
            case 'GET_TRADES_SUCCESS':
                    return {
                        ...state,
                        loading: false,
                        openTrendData: action.payload.open_trades,
                        tradingWalletData: action.payload.training_wallet,
                        tradingData: action.payload.trades
                    }
        default:
            return {
                ...state
            }
    }
}