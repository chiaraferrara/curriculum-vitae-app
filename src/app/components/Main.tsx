import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";
import MainPage from "./MainPage";
import { useContext } from "react";
import { Context } from "../providers/PageProvider";

export default function Main() {
  const { page } = useContext(Context);

  return (
    <>
      <MainPage />
    </>
  );
}
