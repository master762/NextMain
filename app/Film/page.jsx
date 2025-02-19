import Hero from "@/components/Hero";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import Genres from "@/components/Genres";

export default function FilmPage() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Hero />
      <Genres />
      <TheFooter />
    </>
  );
}
