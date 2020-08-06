/**
 * Created by superman on 17/2/16.
 */
import * as types from './types'

export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        triplist:1,    // 采购返回
        tripliste:1,   // 用户返回
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.sort_token = data;
            state.token = data;
        },
        set_tripList(state,data){
            state.triplist=data
        },
        set_tripListe(state,data){
            state.tripliste=data
        },

        [types.LOGOUT]: (state) => {
            localStorage.removeItem('sort_token');
            state.token = null
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
})
