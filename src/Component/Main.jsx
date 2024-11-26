import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Main() {
  return (
    <div className="grid grid-cols-2 w-[75%] m-auto mt-[-20px]">
      <LeftSection />
      <RightSection />
    </div>
  );
}
