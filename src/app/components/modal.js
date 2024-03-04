"use client";

export default function Modal({ showModal, setShowModal, title, children }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none my-20">
            <div className="relative mx-auto w-full max-w-3xl h-full">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-primary-red text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-2 border-solid border-primary-red text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent justify-center items-center text-primary-red h-6 w-6 text-2xl flex">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                {/* <button
                  className="m-6 ml-auto bg-transparent border-2 border-solid border-primary-red "
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent justify-center items-center text-primary-red h-6 w-6 text-2xl flex">
                    ×
                  </span>
                </button> */}
                {children}
                {/*footer*/}
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className=" opacity-85 fixed inset-0 z-40 bg-primary-black"
          ></div>
        </>
      ) : null}
    </>
  );
}
