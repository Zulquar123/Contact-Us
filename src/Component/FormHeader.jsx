import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
export default function FormHeader() {
  const style =
    "flex items-center justify-center gap-3 bg-black text-white p-3 w-[220px] rounded";
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-5 justify-center">
        <div className={style}>
          <MdMessage className="font-bold text-xl" />
          <span>VIA SUPPORT CHAT</span>
        </div>
        <div className={style}>
          <MdCall className="font-bold text-xl" />
          <span>VIA CALL</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 border-[2px] border-black justify-center m-auto p-3 w-[460px] rounded">
        <MdMessage className="font-bold text-xl" />
        <span className="font-semibold">VIA EMAIL FORM</span>
      </div>
    </div>
  );
}
