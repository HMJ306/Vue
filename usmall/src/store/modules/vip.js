import { vipList } from '../../util/request'

const state = {
    list: {}
}
const mutations = {
    changelist(state, arr) {
        state.list = arr
    }
}
const actions = {
    reqvipList(context){
        vipList().then(res=>{
            context.commit('changelist',res.data.list)
        })
    }
}
const getters = {
    list(state){
        return state.list
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}