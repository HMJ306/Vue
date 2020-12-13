import axios from 'axios'
import qs from 'qs'

//相应拦截
axios.interceptors.response.use(res => {
    console.log('========请求的路径:' + res.config.url + '=============')
    console.log(res)
    return res
})


const baseUrl = '/api'

//菜单管理页面请求

//菜单添加
export const menuAdd = data => {
    return axios({
        url: baseUrl + '/api/menuadd',
        method: 'post',
        data: data
    })
}
//菜单列表
export const menuList = (data) => {
    return axios({
        url: baseUrl + '/api/menulist',
        method: 'get',
        params: data
    })
}
//菜单获取（一条）
export const menuListOne = data => {
    return axios({
        url: baseUrl + '/api/menuinfo',
        method: 'get',
        params: data
    })
}
//菜单修改
export const menuEdit = data => {
    return axios({
        url: baseUrl + '/api/menuedit',
        method: 'POST',
        data: data
    })
}
//菜单删除
export const menuDel = data => {
    return axios({
        url: baseUrl + '/api/menudelete',
        method: 'POST',
        data: data
    })
}
////////////////////////////角色管理//////////////////////////////////
//角色添加
export const roleAdd = data => {
    return axios({
        url: baseUrl + '/api/roleadd',
        method: 'post',
        data: data
    })
}
//角色列表
export const roleList = data => {
    return axios({
        url: baseUrl + '/api/rolelist',
        method: 'get',
        params: data
    })
}
//角色获取（一条）
export const roleListOne = data => {
    return axios({
        url: baseUrl + '/api/roleinfo',
        method: 'get',
        params: data
    })
}
//角色修改
export const roleEdit = data => {
    return axios({
        url: baseUrl + '/api/roleedit',
        method: 'post',
        data: data
    })
}
//角色删除
export const roleDel = data => {
    return axios({
        url: baseUrl + '/api/roledelete',
        method: 'post',
        data: data
    })
}
//////////////////////* 管理员管理 *////////////////////////////////
//管理员添加
export const userAdd = data => {
    return axios({
        url: baseUrl + '/api/useradd',
        method: 'post',
        data: data
    })
}
//管理员总数（用于计算分页）
export const userCount = data => {
    return axios({
        url: baseUrl + '/api/usercount',
        method: 'get',
    })
}
//管理员列表（分页）
export const userList = data => {
    return axios({
        url: baseUrl + '/api/userlist',
        method: 'get',
        params: data
    })
}
//管理员获取（一条）
export const userInfo = data => {
    return axios({
        url: baseUrl + '/api/userinfo',
        method: 'get',
        params: data
    })
}
//管理员修改
export const useredit = data => {
    return axios({
        url: baseUrl + '/api/useredit',
        method: 'post',
        data: data
    })
}
//管理员删除
export const userDel = data => {
    return axios({
        url: baseUrl + '/api/userdelete',
        method: 'post',
        data: data
    })
}
//管理员登录
export const userlogin = data => {
    return axios({
        url: baseUrl + '/api/userlogin',
        method: 'post',
        data: data
    })
}
//////////////////////* 商品分类管理 *////////////////////////////////

//商品分类添加
export const cateAdd = data => {
    var form = new FormData()
    for (var i in data) {
        form.append(i, data[i])
    }
    return axios({
        url: baseUrl + '/api/cateadd',
        method: 'post',
        data: form
    })
}
//商品分类列表
export const cateList = params => {
    return axios({
        url: baseUrl + '/api/catelist',
        method: 'get',
        params: params
    })
}
//商品分类获取（一条）
export const cateInfo = id => {
    return axios({
        url: baseUrl + '/api/cateinfo',
        method: 'get',
        params: id
    })
}
//商品分类修改
export const cateEdit = data => {
    var form = new FormData()
    for (var i in data) {
        form.append(i, data[i])
    }
    return axios({
        url: baseUrl + '/api/cateedit',
        method: 'post',
        data: form
    })
}
//商品分类删除
export const cateDel = id => {
    return axios({
        url: baseUrl + '/api/catedelete',
        method: 'post',
        data: id
    })
}

//////////////////////* 商品规格管理 *////////////////////////////////

//商品规格添加
export const specsAdd = data => {
    return axios({
        url: baseUrl + '/api/specsadd',
        method: 'post',
        data: data
    })
}
//商品规格总数（用于计算分页）
export const specsCount = () => {
    return axios({
        url: baseUrl + '/api/specscount',
        method: 'get',
    })
}
//商品规格列表（分页）
export const specsList = data => {
    return axios({
        url: baseUrl + '/api/specslist',
        method: 'get',
        params: data
    })
}
//商品规格获取（一条）
export const specsInfo = data => {
    return axios({
        url: baseUrl + '/api/specsinfo',
        method: 'get',
        params: data
    })
}
//商品规格修改
export const specsEdit = data => {
    return axios({
        url: baseUrl + '/api/specsedit',
        method: 'post',
        data: data
    })
}
//商品规格删除
export const specsDel = data => {
    return axios({
        url: baseUrl + '/api/specsdelete',
        method: 'post',
        data: data
    })
}


//////////////////////* 商品管理 *////////////////////////////////

//商品管理添加
export const goodsAdd = data => {
    var form = new FormData()
    for (var i in data) {
        form.append(i, data[i])
    }
    return axios({
        url: baseUrl + '/api/goodsadd',
        method: 'post',
        data: form
    })
}
//商品规格总数（用于计算分页）
export const goodsCount = () => {
    return axios({
        url: baseUrl + '/api/goodscount',
        method: 'get',
    })
}
//商品管理列表
export const goodsList = params => {
    return axios({
        url: baseUrl + '/api/goodslist',
        method: 'get',
        params: params
    })
}
//商品管理获取（一条）
export const goodsInfo = id => {
    return axios({
        url: baseUrl + '/api/goodsinfo',
        method: 'get',
        params: id
    })
}
//商品管理修改
export const goodsEdit = data => {
    var form = new FormData()
    for (var i in data) {
        form.append(i, data[i])
    }
    return axios({
        url: baseUrl + '/api/goodsedit',
        method: 'post',
        data: form
    })
}
//商品管理删除
export const goodsDel = id => {
    return axios({
        url: baseUrl + '/api/goodsdelete',
        method: 'post',
        data: id
    })
}

//////////////////////* 会员管理 *////////////////////////////////

export const vipList = () => {
    return axios({
        url: baseUrl + '/api/memberlist',
        method: 'get'
    })
}
export const vipLook = (data) => {
    return axios({
        url: baseUrl + '/api/memberinfo',
        method: 'get',
        params: data
    })
}
export const vipEdit = (data) => {
    return axios({
        url: baseUrl + '/api/memberedit',
        method: 'post',
        data: data
    })
}

//////////////////////* 限时秒杀 *////////////////////////////////

//限时秒杀添加
export const seckAdd = (data) => {
    return axios({
        url: baseUrl + '/api/seckadd',
        method: 'post',
        data: data
    })
}
//限时秒杀列表
export const seckList = () => {
    return axios({
        url: baseUrl + '/api/secklist',
        method: 'get',
    })
}
//限时秒杀获取（一条）
export const seckInfo = (id) => {
    return axios({
        url: baseUrl + '/api/seckinfo',
        method: 'get',
        params:id
    })
}

//限时秒杀修改
export const seckEdit = (data) => {
    return axios({
        url: baseUrl + '/api/seckedit',
        method: 'post',
        data: data
    })
}
//商品管理删除
export const seckDel = id => {
    return axios({
        url: baseUrl + '/api/seckdelete',
        method: 'post',
        data: id
    })
}