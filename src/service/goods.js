import requset from '../utils/request'
import api from '../config/api'

export async function getGoodsInfo() {
    return requset(api.goodsInfo)
}