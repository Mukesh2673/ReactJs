import React, { useState } from "react";
import Data from "./Data";
import "./Accordion.css";
import AcordionComp from "../AcordionComp";
export default function Accordion() {
  const [data, setData] = useState(Data);
  return (
    <>
      <div className="container">
        <div className="accordionBlock">
          {Data.map((val) => {
            return (
              <>
                <AcordionComp {...val} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
