import requset from '../utils/request'
import api from '../config/api'

export async function getBanner() {
    return requset(api.banner)
}

export async function getKinds() {
    return requset(api.kinds)
}