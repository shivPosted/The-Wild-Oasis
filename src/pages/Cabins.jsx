import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinsTable from "../features/cabins/CabinsTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateNewCabin from "../features/cabins/CreateNewCabin";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row alignment="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <div>sort/filter</div>
      </Row>
      <CabinsTable />
      <Button onClick={() => setShowForm((cur) => !cur)}>
        {showForm ? "Cancel" : "Add Cabin"}
      </Button>
      {showForm && <CreateNewCabin />}
    </>
  );
}
export default Cabins;
