import { createBrowserSupabaseClient } from "@/lib/supabase/cient";

export async function uploadCarImage(file: File) {
  const supabase = createBrowserSupabaseClient();

  const fileExtension = file.name.split(".").pop();

  const fileName = `${Date.now()}.${fileExtension}`;

  const filePath = `cars/${fileName}`;


  const { error } = await supabase.storage
    .from("car-images")
    .upload(filePath, file);


  if (error) {
    throw error;
  }


  const { data } = supabase.storage
    .from("car-images")
    .getPublicUrl(filePath);


  return data.publicUrl;
}