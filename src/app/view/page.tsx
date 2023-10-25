'use client';
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Header from '../../components/Header';
// import Map from '../../components/Map';

export default function View() {
  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <Header />
      <Map />
    </>
  );
};