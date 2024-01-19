import { useRef, useState, useCallback } from "react";
import { toast } from "react-toastify";
function Modal() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { resRef } = useRef(null);
  const handleCreateClick = (e) => {
    e.preventDefault();
    if (longUrl === "") {
      toast.error("Enter valid URL!");
    } else {
      short();
    }
  };

  const close = () => {
    setLongUrl("");
    setShortUrl("");
  };

  const handleCopyClick = useCallback(() => {
    window.navigator.clipboard.writeText(shortUrl);
    toast.success("Url Copied!");
  }, [shortUrl]);

  async function short() {
    try {
      fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer a480181176a0c6385d0282664eaa57122ccd92f6`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: longUrl,
        }),
      })
        .then((res) => res.json())
        .then((data) => setShortUrl(data.link));
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <dialog id="link_shortner_modal" className="modal">
      <div className="modal-box glass  backdrop-blur border-1 border-primary border-solid">
        <h3 className="font-bold text-2xl  text-primary">Create new</h3>
        <div className="w-full h-0.5 bg-primary mb-5"></div>
        <form action="">
          <div className="pb-4">
            <label
              htmlFor="long-link"
              className="block text-sm font-medium leading-6 text-primary"
            >
              Destination Link
            </label>
            <div className="flex flex-row">
              <input
                type="text"
                name="long-link"
                id="long-link"
                value={longUrl}
                onChange={(e) => {
                  setLongUrl(e.target.value);
                }}
                className="block w-96 rounded-md border-0  pl-4 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 active:ring-2   active:ring-primary sm:text-sm sm:leading-6"
                placeholder="https://example.com/my-lonq-url"
              />
              <div className=" flex items-center  btn-circle ">
                <button
                  className="btn text-sm mx-2 btn-secondary "
                  onClick={handleCreateClick}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="shortURL"
              className="block text-sm font-medium leading-6 text-primary"
            >
              Shorten URL
            </label>
            <div className="flex flex-row rounded-md shadow-sm">
              <input
                type="text"
                name="shortURL"
                id="shortURL"
                value={shortUrl}
                className="block w-96 rounded-md border-0 bg-nuetral pl-4 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-primary-content focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Result..."
                disabled
                ref={resRef}
              />
              <div className=" flex items-center   btn-circle ">
                <button
                  className="btn btn-secondary text-sm mx-2 px-5"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyClick();
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="modal-action ">
          <form method="dialog" className="w-full">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn w-full btn-secondary"
              onClick={(e) => {
                close();
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
