import axios, { AxiosError } from "axios";

export const GetCases = (callback, token) => {
  // const dispatch = useDispatch();
  const url = `http://api.keyhantarh.ir/Home/AllCases`;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
  axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";

  axios
    .get(url)
    .then((response) => {
      // console.log(response.data.role);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("role", response.data.role);

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
