import { goodsList } from '../../util/request'

const state = {
    //请求回来的数据
    list: []
}
const mutations = {
    changeList(state, arr) {
        state.list = arr
    }

}
const actions = {
    reqgoodsList(context) {
        goodsList({ size: 5, page: 1 }).then(res => {
            // console.log(res);
        
            context.commit('changeList', res.data.list)
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