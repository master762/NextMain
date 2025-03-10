import Price from "@/components/Price";
import React from "react";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import PriceTable from "@/components/PriceTable";
export default function page() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Price />
      <PriceTable />
      <TheFooter />
    </>
  );
}
