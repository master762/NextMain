import Bunner from "@/components/Bunner";
import Categories from "../components/Categories";
import Questions from "@/components/Questions";
import Price from "@/components/Price";

export default function Home() {
  return (
    <>
      <Categories />
      <Bunner />
      <Questions />
      <Price />
    </>
  );
}
