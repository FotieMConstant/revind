import React from "react";
import Flex from "../../../components/Flex/Flex";

function _Flex() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">The Flex component</h1>
      <br />
      <br />
      <hr />
      <Flex justifyContent="center">
        <h1>Should be center</h1>
      </Flex>
      <br />
      <hr />
      <Flex direction="column" alignItems="center">
        <span>Should be</span>
        <span>Vertically aligned & centered</span>
      </Flex>
      <Flex wrap="wrap" justifyContent="start" alignItems="center" alignContent="center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className="h-20 w-1/4 border border-black border-solid rounded-md">
            Should wrap, justify at start, align in center & content position center |
            Index {i}
          </div>
        ))}
      </Flex>
    </>
  );
}

export default _Flex;
