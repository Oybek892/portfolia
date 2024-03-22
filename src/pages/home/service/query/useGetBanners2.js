import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetBanner2 = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};
