import React from "react";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import Support from "@/components/Support";
export default function SupportPage() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Support />
      <TheFooter />
    </>
  );
}
