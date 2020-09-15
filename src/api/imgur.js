import qs from "qs";
const CLIENT_ID = "56da5e161797a7a";
const ROOT_URL = "https://api.imgur.com";
import axios from "axios";

export default {
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });

    return Promise.all(promises);
  },

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/084zeeshankhan/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  logIn() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
};
