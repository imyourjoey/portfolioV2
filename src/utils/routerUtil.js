// src/utils/routerUtil.js
import { useRouter } from "vue-router";

const useRouterUtil = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return { navigateTo };
};

export default useRouterUtil;
