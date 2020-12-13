import { userlogin } from '../../util/request'

const state = {
    list: sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):{}
}
const mutations = {
    changelist(state, obj) {
        state.list = obj
        sessionStorage.setItem('list',JSON.stringify(obj))
    }
}
const actions = {
    requserlogin(context,obj) {
        userlogin().then(res=>{
            context.commit('changelist',obj)
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
    getters,
    namespaced: true
}