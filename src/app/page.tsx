"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PageProvider from "./providers/PageProvider";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <PageProvider>
        <main className={styles.main}>
          <Header />
          <Main />
        </main>
      </PageProvider>
    </ChakraProvider>
  );
}
