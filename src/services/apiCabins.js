import supabase from "./supabase";

async function getCabins() {
  try {
    const { data, error } = await supabase.from("the_oasis_cabins").select("*");
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err.message);
    console.log("could not load cabin data");
  }
}

async function deleteCabin(id) {
  console.log(id);
  const { data, error } = await supabase
    .from("the_oasis_cabins")
    .delete()
    .eq("id", id)
    .select("*");
  if (error) throw error;

  return data;
}

export { getCabins, deleteCabin };
