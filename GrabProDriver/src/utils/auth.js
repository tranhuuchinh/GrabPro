// const { localStorage } = global.window;
// import localStorage =
import AsyncStorage from "@react-native-async-storage/async-storage";

const retrieveIdFromStorage = async () => {
  try {
    const _id = await AsyncStorage.getItem("_id");
    if (_id !== null) {
      console.log("Giá trị _id từ AsyncStorage:", _id);
    } else {
      console.log("Không tìm thấy giá trị _id trong AsyncStorage");
    }
  } catch (error) {
    console.error("Lỗi khi lấy giá trị _id từ AsyncStorage:", error);
  }
};
const auth = {
  login(datas) {
    const { data } = datas; // Destructure data từ tham số datas
    // Lưu _id vào AsyncStorage
    AsyncStorage.setItem("_id", data._id);
    AsyncStorage.setItem("phone", data.phone);
    AsyncStorage.setItem("role", data.role);
    const storedId = AsyncStorage.getItem("_id");
    // retrieveIdFromStorage();
  },

  type(data) {
    const { data } = data;
    AsyncStorage.setItem("type", data.transport.type);
  },

  // setAccessToken(token) {
  //   localStorage.access_token = token;
  // },

  // setID(_id) {
  //   localStorage._id = _id;
  // },

  // getAccessToken() {
  //   return localStorage.access_token;
  // },

  // getID() {
  //   return localStorage._id;
  // },

  // getPhone() {
  //   return localStorage.phone;
  // },

  // role() {
  //   return localStorage.role;
  // },

  // getInfo() {
  //   return {
  //     name: localStorage.name || "",
  //     gender: localStorage.gender || "",
  //     dob: localStorage.dob || "",
  //     phone: `${localStorage.phone.substring(
  //       0,
  //       2
  //     )}*****${localStorage.phone.substring(
  //       localStorage.phone.length - 3,
  //       localStorage.phone.length
  //     )}`,
  //     email: localStorage.email || "",
  //   };
  // },

  // getAvatar() {
  //   return !localStorage.avatar ||
  //     localStorage.avatar === "undefined" ||
  //     localStorage.avatar === "null"
  //     ? ""
  //     : localStorage.avatar;
  // },

  // updateAvatar(avt) {
  //   localStorage.avatar = avt;
  // },

  // updateInfo(userInfo) {
  //   localStorage.name = userInfo.name;
  //   localStorage.gender = userInfo.gender;
  //   localStorage.dob = userInfo.dob;
  //   localStorage.email = userInfo.email;
  // },

  // logout() {
  //   localStorage.clear();
  // },
};

export default auth;
