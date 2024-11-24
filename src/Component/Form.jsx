export default function Form() {
  return (
    <div className="flex justify-center m-auto mt-5">
      <form action="" className="flex flex-col gap-3 w-[400px]">
        <div className="border-[2px] border-black rounded">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="p-3 w-full "
          />
        </div>
        <div className="border-[2px] border-black rounded">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            className="p-3 w-full"
          />
        </div>
        <textarea
          name="textarea"
          id=""
          placeholder="Message"
          className="p-3 h-[120px] border-[2px] border-black rounded"
        ></textarea>
        <div className="flex justify-end ">
          <button
            type="submit"
            className="bg-black text-white w-[220px] p-2 text-xl rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
