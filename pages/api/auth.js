import axios, { AxiosError } from "axios";
import store, { account } from "../../redux/store";
import { role } from "../../features/user.slice";
// import { useDispatch } from "react-redux";




export const LoginUser = (callback, data) => {
  // const dispatch = useDispatch();
  const url = `http://api.keyhantarh.ir/login`;
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
  axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";


  axios
    .post(url, data)
    .then((response) => {
      console.log(response.data.role);
     localStorage.setItem("token", response.data.token)
     localStorage.setItem("role", response.data.role)

     


      callback({
        success: true,
        link: "",
        message: response.data,
      });
    })
    .catch(() => {
      callback({
        success: false,
        link: "",
        message: "مشکلی در ارتباط با سرور رخ داده است.",
      });
    });
};
