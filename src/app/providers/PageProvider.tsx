import { pages } from "next/dist/build/templates/app-page";
import { createContext, useState } from "react";

export const Context = createContext({
  page: "PageOne",
  setPage: (page: string) => {},
});

export interface Props {
  children: React.ReactNode;
}
export default function PageProvider({ children }: Props) {
  const [page, setPage] = useState<string>("PageOne");

  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
}
