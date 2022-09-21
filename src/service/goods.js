import requset from '../utils/request'
import api from '../config/api'

export async function getGoodsInfoByKind(kind) {
    let url = api.goodsInfo + "?kind=" + kind
    return requset(url)
}