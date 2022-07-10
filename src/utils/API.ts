import axios from "axios";


//create an axios instance with some configs
const axiosapi = axios.create({
baseURL: "https://172.27.224.1:44333/",
// baseURL: "https://sul.co.ke/smsapi/",
 headers: {
  "Content-type": "application/json"
}
});

//Configure axios interceptors
// axiosinstance.interceptors.request.use(
//   async (config) => {
//     const authUser = useAppSelector((state) => state.auth);
//     if (authUser && authUser.user) {
//       config.headers = {
//         Authorization: `Bearer ${authUser.user.token}`,
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded",
//       };
//       return config;
//     }else Promise.reject();
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
export default axiosapi;
