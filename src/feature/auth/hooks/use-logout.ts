import { useTransition } from "react";
import { logoutAction } from "../actions/logout-action";

export function useLogout() {
  const [isPending, startTransition] = useTransition();

  const logout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return {
    logout,
    isPending,
  };
}
