import axios from "axios";

const localinstance = axios.create({
  // baseURL: "http://192.168.7.148:7000/api/",
  // baseURL: "http://192.168.7.168:8050/api",
  // baseURL: "http://192.168.7.168:8050/api",
  //   baseURL: "https://lazy-cyan-octopus-sari.cyclic.app/api",
  // baseURL: "http://192.168.7.90:8050/api",
  // baseURL: ": https://rich-blue-earthworm-boot.cyclic.app/api/",
  baseURL: "https://rich-blue-earthworm-boot.cyclic.app/api/",
});

export default localinstance;
