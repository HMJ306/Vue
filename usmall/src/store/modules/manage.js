import { userList, userCount } from '../../util/request'

const state = {
    list: [],
    total: 0,
    size: 2,
    page: 1
}
const mutations = {
    changeList(state, arr) {
        state.list = arr
    },
    //获取总数
    changeCount(state, num) {
        state.total = num
    },
    //修改当前页
    changePages(state, page) {
        state.page = page
    }
}
const actions = {
    requserList(context) {
        userList({
            size: context.state.size,
            page: context.state.page
        }).then(res => {
            console.log(res);
            context.commit('changeList', res.data.list)
        })
    },
    //请求获取总数
    requserCount(context) {
        userCount().then(res => {
            console.log(res)
            context.commit('changeCount', res.data.list[0].total)
        })
    },
    // 修改当前的页码数
    reqPages(context,page){
        context.commit('changePages',page)
        // 根据当前点击的页码数，重新发送请求，由于mutations没有权限修改actions所以需要借助仓库（context）
        context.dispatch('requserList')
    }
}
const getters = {
    list(state) {
        return state.list
    },
    total(state) {
        return state.total
    },
    page(state){
        return state.page
    },
    size(state){
        return state.size
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}