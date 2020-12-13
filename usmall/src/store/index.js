import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import menu from './modules/menu'
import role from './modules/role'
import manage from './modules/manage'
import Classification from './modules/Classification'
import specs from './modules/specs'
import goods from './modules/goods'
import user from './modules/user'
import seckill from './modules/seckill'
export default new Vuex.Store({
    modules: {
        menu,
        role,
        manage,
        Classification,
        specs,
        goods,
        user,
        seckill
    }
})