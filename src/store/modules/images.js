import api from "../../api/imgur";
import { router } from "../../main";
const state = {
  images: {},
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ commit, rootState }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);

    commit("setImages", response.data.data);
  },

  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;

    await api.uploadImages(images, token);

    router.push("/");
  },

  // delImage: function({ commit }, rootState, id) {
  //   const { token } = rootState.auth;
  //   api.delImage(id, token);
  //   commit()
  // },

  likeImage({ commit }, id) {
    commit("likeImage", id);
  },

  // favorite() {},
};

const mutations = {
  setImages: (state, images) => {
    state.images = images.map((image) => {
      return { image, isLiked: false };
    });
  },
  likeImage(state, id) {
    state.images.forEach((image, index) => {
      if (index === id) {
        console.log(index);
        image.isLiked = !image.isLiked;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
