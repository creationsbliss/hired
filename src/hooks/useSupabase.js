import { useMemo } from "react";
import { useSession } from "@clerk/clerk-react";
import { createSupabaseClient } from "@/lib/supabase";

export function useSupabase() {
  const { session } = useSession();

  return useMemo(
    () => createSupabaseClient(async () => session?.getToken() ?? null),
    [session]
  );
}
