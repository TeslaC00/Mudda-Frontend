import useSWR from "swr";
import { apiClient } from "@/app/lib/api-client";
import { AccountInfo } from "../types/user";

export function useUser() {
  const { data, error, mutate, isLoading } = useSWR(
    "api/v1/account/me",
    () => apiClient.get<AccountInfo>("api/v1/account/me"),
    {
      revalidateOnFocus: false,
      refreshInterval: 60000, // 1 minute
    },
  );

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
}
