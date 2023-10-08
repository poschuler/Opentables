export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First Name"
      />

      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last Name"
      />

      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone Name"
      />

      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email Name"
      />

      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
      />

      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Request (optional)"
      />

      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fuga
        quasi dolorum accusantium, quod numquam architecto. Delectus amet
        voluptates ipsum ipsa itaque. Est voluptatum fugiat sunt eligendi velit
        numquam quod.
      </p>
    </div>
  );
}
