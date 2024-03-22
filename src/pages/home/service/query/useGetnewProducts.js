import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const useGetnewProducts = (slug) => {
  return useQuery({
    queryKey: ["newProduct",slug],
    queryFn: () => request.get(`/${slug}`).then((res) => res.data),
  });
};

export default useGetnewProducts;
