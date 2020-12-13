import { specsList } from '../../util/request'

const state = {
    //请求回来的数据
    list: []
}
const mutations = {
    chengeList(state, arr) {
        state.list = arr
    }

}
const actions = {
    reqspecsList(context) {
        specsList({ size: 5, page: 1 }).then(res => {
            // console.log(res);
             var arr = res.data.list
             arr.forEach(item => {
                 item.attrs = JSON.parse(item.attrs)
             });
             console.log(arr);
             context.commit('chengeList', arr)
            // context.commit('chengeList', res.data.list)
        })
    }
}
const getters = {
    list(state) {
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