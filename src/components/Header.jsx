import { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

import TopHeader from "./TopHeader";
import { useLang } from "../contexts/LangContext";

function Header() {
  const { lang } = useLang();

  const [alignment, setAlignment] = useState(
    location.pathname.slice(1) || "all"
  );

  let tit = { ar: "الكل", en: "all" };
  switch (alignment) {
    case "all":
      tit.ar = "الكل";
      tit.en = "All";
      break;
    case "completed":
      tit.ar = "المنجزة";
      tit.en = "Completed";
      break;
    case "uncompleted":
      tit.ar = "غير المنجزة";
      tit.en = "Uncompleted";

      break;
  }
  return (
    <>
      <TopHeader tit={lang == "en" ? tit.en : tit.ar} />

      <ToggleButtonGroup
        // dir="ltr"
        value={alignment}
        exclusive
        className=" md:w-3/6 flex justify-center w-full "
        onChange={(e) => {
          setAlignment(e.target.value);
        }}
        color="primary"
        aria-label="Platform"
      >
        <Link className="flex-auto" to={"/uncompleted"}>
          <ToggleButton
            className="w-full text-xs md:text-base"
            value="uncompleted"
          >
            {lang == "en" ? "uncompleted" : "غير المنجزة"}
          </ToggleButton>
        </Link>
        <Link className="flex-auto" to={"/completed"}>
          <ToggleButton
            className="w-full text-xs md:text-base"
            // color="secondary"
            value="completed"
          >
            {lang == "en" ? "completed" : "المنجزة"}
          </ToggleButton>
        </Link>
        <Link className="flex-auto" to={"/"}>
          <ToggleButton
            className="w-full text-xs md:text-base"
            // color="secondary"
            value="all"
          >
            {lang == "en" ? "all" : "الكل"}
          </ToggleButton>
        </Link>
      </ToggleButtonGroup>
    </>
  );
}

export default Header;
