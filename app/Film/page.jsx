import Hero from "@/components/Hero";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import MoviesBlock from "@/components/MoviesBlock";

export default function FilmPage() {
  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <Hero />
      <MoviesBlock />
      <TheFooter />
    </>
  );
}
