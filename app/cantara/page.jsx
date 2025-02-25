import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Test />
      <TheFooter />
    </>
  );
}
