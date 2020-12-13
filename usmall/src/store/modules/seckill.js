import {seckList} from '../../util/request'

const state = {
    //请求回来的数据
    list:[]
}
const mutations = {
    chengeList(state,arr){
        state.list=arr
    }

}
const actions = {
    reqseckList(context){
        seckList({istree:true}).then(res=>{
            // console.log(res);
            context.commit('chengeList',res.data.list)
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
    namespaced:true
}