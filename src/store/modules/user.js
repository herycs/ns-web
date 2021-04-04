const state = () => ({
  items: [],
  checkoutStatus: null,
  userInfo: {
    name: "",
    age: "",
    sex: "lan",
    desc: ""
  }
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  }
};
const constant = {
  SET_USER_INFO: "user/setUserInfo"
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
  },
  getUserInfo({ commit, state }, id) {
    // console.log(id);
    let payload = { age: 18, name: "张三" };
    commit(constant.SET_USER_INFO, payload);
  }
};

// mutations
const mutations = {
  [constant.SET_USER_INFO](state, payload) {
    // console.log(state, state.userInfo);
    state.userInfo = { ...state.userInfo, ...payload };
  },
  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
