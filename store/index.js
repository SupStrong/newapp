import Vue from "vue";
import Vuex from "vuex";
import Common from "./modules/common";
import Colors from "./modules/colors";
import Member from "./modules/member";
import Cart from "./modules/cart";
import Address from "./modules/address";
import Myhome from "./modules/myhome";
import Ask from "./modules/ask";
import Params from "./modules/params";
import Search from "./modules/search";
import Popup from "./modules/popup";
import Switch from "./modules/switch";
import Wechat from "./modules/wechat";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    Common,
    Colors,
    Cart,
    Member,
    Address,
    Myhome,
    Ask,
	Params,
	Search,
	Popup,
	Switch,
	Wechat
  },
})



