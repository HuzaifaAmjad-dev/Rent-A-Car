import { createServerSupabaseClient } from "@/lib/supabase/server";
import BookingsManagement from "@/components/admin/BookingsManagement";

export default async function BookingsPage() {
  const supabase = createServerSupabaseClient();

  const { data: bookings } = await supabase
    .from("bookings")
    .select(
      `
        *,
        cars (
          name
        )
      `
    )
    .eq("is_deleted", false)
    .order("created_at", {
      ascending: false,
    });

  return (
    <BookingsManagement
      bookings={bookings ?? []}
    />
  );
}