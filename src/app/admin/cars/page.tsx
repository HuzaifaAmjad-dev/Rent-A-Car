import { createServerSupabaseClient } from "@/lib/supabase/server";
import CarsManagement from "@/components/admin/CarManagement";

export default async function CarsPage() {
  const supabase = createServerSupabaseClient();

  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .eq("is_deleted", false)
    .order("created_at", {
      ascending: false,
    });

  return (
    <CarsManagement cars={cars ?? []} />
  );
}