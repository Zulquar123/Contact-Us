import { useState } from "react";

export default function Form() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.textarea.value;
    setformData({ name, email, message });

    console.log(name);
    console.log(email);
    console.log(message);
    event.target.reset();
  };

  return (
    <div className="flex justify-center m-auto mt-3">
      <form
        action=""
        className="flex flex-col gap-2 w-[400px]"
        onSubmit={handleSubmitBtn}
      >
        <div className="border-[2px] border-black rounded">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="p-3 w-full "
            required
          />
        </div>
        <div className="border-[2px] border-black rounded">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            className="p-3 w-full"
            required
          />
        </div>
        <textarea
          name="textarea"
          id=""
          placeholder="Message"
          className="p-3 h-[120px] border-[2px] border-black rounded"
          required
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
      <div>{formData.name + " " + formData.email + " " + formData.message}</div>
    </div>
  );
}
