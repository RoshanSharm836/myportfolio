import React from "react";
import Aside from "./Aside";
import Main from "./Main";

function Layout() {
  return (
    <>
      <main>
        <aside className="sidebar xl:w-[350px] ">
          <Aside />
        </aside>
        <section class="main-content">
          <Main />
        </section>
      </main>
    </>
  );
}

export default Layout;
