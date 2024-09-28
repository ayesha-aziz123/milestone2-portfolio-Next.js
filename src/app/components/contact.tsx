"use client";

export default function Contact() {
  function submit(e: any) {
    if (e !== undefined) alert("Submit successfully");
  }

  return (
    <section className="bg-slate-800 text-white">
      <form>
        <div id="contact" className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="font-bold text-3xl sm:text-[40px] mb-4">
              Contact Us
            </h1>
            <h3 className="text-white">Feel Free to Contact!</h3>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name:
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    className="w-full focus:ring-2 bg-gray-200 rounded border-2 px-3 py-1 text-base text-gray-700 outline-none focus:bg-white bg-opacity-30"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email:
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                    id="email"
                    className="w-full focus:ring-2 bg-gray-200 rounded border-2 px-3 py-1 text-base text-gray-700 outline-none focus:bg-white bg-opacity-30"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message:
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Enter here "
                    name="message"
                    id="message"
                    className="w-full focus:ring-2 bg-gray-200 rounded border-2 px-3 py-1 text-base text-gray-700 outline-none focus:bg-white bg-opacity-30"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  onClick={submit}
                  type="submit"
                  className="btn py-3 px-7 md:py-3 md:px-8 font-bold mx-auto flex rounded-xl outline-none border-none bg-pink-600 "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
