import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE } from './userData.types';
const initialState = {
    dataList: [],
    dataListSuccess: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                dataList: [],
                dataListSuccess: false,
            }
        case DATA_SUCCESS:
            return {
                ...state,
                dataListSuccess: true,
                dataList: action.payload,
            }
        case DATA_FAILURE:
            return {
                ...state,
                dataListSuccess: false,
                dataList: action.payload,
            }
        default:
            return state;
    }

};

export default reducer;