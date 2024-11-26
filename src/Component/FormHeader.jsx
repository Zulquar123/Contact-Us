import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function FormHeader() {
  const style =
    "flex items-center justify-center gap-3 bg-black text-white p-3 w-full sm:w-[220px] rounded";

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Chat and Call Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <div className={style}>
          <MdMessage className="font-bold text-xl" />
          <span>VIA SUPPORT CHAT</span>
        </div>
        <div className={style}>
          <MdCall className="font-bold text-xl" />
          <span>VIA CALL</span>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-center gap-3 border-2 border-black m-auto p-3 w-full sm:w-[460px] rounded">
        <MdMessage className="font-bold text-xl" />
        <span className="font-semibold">VIA EMAIL FORM</span>
      </div>
    </div>
  );
}
