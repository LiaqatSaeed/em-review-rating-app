import { Post } from "../client/REST";

export default {
  login: (params: any) => Post(`/login`, params),
  register: (params: any) => {
    return Post(`/register`, params);
  },
};
