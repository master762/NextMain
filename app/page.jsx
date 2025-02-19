import Bunner from "@/components/Bunner";
import Categories from "../components/Categories";
import Questions from "@/components/Questions";
import Price from "@/components/Price";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default function Home() {
  return (
    <>
      <TheHeader showTextContent={true} showBgImage={true} />
      <Categories />
      <Bunner />
      <Questions />
      <Price />
      <TheFooter />
    </>
  );
}
