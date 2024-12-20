import supabase from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("the_oasis_cabins").select("*");
  if (error) throw error;
  return data;
}

async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("the_oasis_cabins")
    .delete()
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete the cabin");
  }

  return data;
}

export { getCabins, deleteCabin };
