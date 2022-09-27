import requset from '../utils/request'
import api from '../config/api'

export async function getGoodsInfoByKind(kind) {
    let url = api.goodsInfo + "?kind=" + kind
    return requset(url)
}
 
export async function getGoodsDteailInfoById(id) {
    let url = api.goodsDteailInfo + "?id=" + id
    return requset(url)
}