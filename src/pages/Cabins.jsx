import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins()
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Row alignment="horizontal">
        <Heading as="h1">Account</Heading>
        <p>Test Account</p>
      </Row>
    </>
  );
}
export default Cabins;
