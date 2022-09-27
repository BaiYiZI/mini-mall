import requset from "../utils/request";
import api from "../config/api";

export async function getShoppings() {
  return requset(api.shopping);
}
