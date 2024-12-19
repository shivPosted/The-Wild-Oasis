import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinsTable from "../features/cabins/CabinsTable";

function Cabins() {
  return (
    <>
      <Row alignment="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <div>sort/filter</div>
      </Row>
      <CabinsTable />
    </>
  );
}
export default Cabins;
