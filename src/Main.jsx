import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./component/About";
import Resume from "./component/Resume";
import Slot from "./component/Slot";
import Project from "./component/Project";
import Contact from "./component/Contact";

function Main() {
  const obj = {
    about: <About />,
    resume: <Resume />,
    project: <Project />,
    contact: <Contact />,
  };
  const [page, setPage] = useState("about");
  const [slots, setSlots] = useState(obj[page]);

  useEffect(() => {
    setSlots(obj[page]);
  }, [page]);

  const getPage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Navbar get={getPage} page={page} />
      <Slot slot={slots} />
    </>
  );
}

export default Main;
