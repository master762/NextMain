import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import LeftFilmDesc from "@/components/LeftFilmDesc";

export default function Home() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <LeftFilmDesc />
      <TheFooter />
    </>
  );
}
