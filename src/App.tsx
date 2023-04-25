import * as React from "react";
// import { RefreshCw } from "react-feather";
import "./styles.css";

function Campaign() {
  const [raised, setRaised] = React.useState(0);
  const [donors, setDonors] = React.useState(0);
  const [showForm, setShowForm] = React.useState(true);
  const [showThanks, setShowThanks] = React.useState(false);
  const onClickDonate = () => {
    setShowForm(true);
  };
  const onClickSubmit = (e: React.FormEvent) => {
    console.log("donating...");
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5 })
    };
    fetch("https://100.15.15.211:25566", requestOptions)
      .then(console.log)
      .catch(console.log);
    setShowForm(false);
    // setShowThanks(true);
  };
  return (
    <div className="App pl-4 pr-4">
      <div className="flex justify-center">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/03/GoFundMe-Logo.png"
          width="120px"
          alt="gofundme logo"
        />
      </div>
      {showThanks && <div>Thanks</div>}
      {!showThanks && (
        <>
          <img className="rounded-lg" src="parrot.jpg" alt="parrot" />
          <h1 className="mt-3 text-3xl font-bold">Let’s F’n Goooo!</h1>
          <div className="mt-1">
            ${raised}{" "}
            <span className="text-gray-500">raised of $10,000 goal • </span>
            {donors} <span className="text-gray-500">Donors</span>
          </div>
          <div className="mt-2 mb-2">
            <button
              className="mt-4 rounded-xl pt-4 pb-4 w-full font-semibold"
              style={{
                background: "linear-gradient(180deg, #f9db74 0%, #f3bc51 100%)"
              }}
            >
              Share
            </button>
            <button
              className="mt-2 rounded-xl pt-4 pb-4 w-full font-semibold"
              style={{
                background: "linear-gradient(180deg, #fdb933 0%, #f99a32 100%)"
              }}
              onClick={onClickDonate}
            >
              Donate now
            </button>
          </div>
          {showForm && (
            <div className="flex justify-center mt-6 mb-6">
              <form>
                <label className="text-gray-600 block mb-1 font-semibold">
                  Donation Amount
                </label>
                <span
                  className="text-xl font-medium"
                  style={{ marginLeft: "-16px" }}
                >
                  $
                </span>{" "}
                <input className="form-input leading-5" />
                <label className="mt-2 text-gray-600 block mb-1 font-semibold">
                  Minecraft Username{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <input className="form-input leading-5" />
                <div>
                  <button
                    className="mt-6 pt-3 pb-3 w-full rounded-full font-semibold text-white"
                    type="submit"
                    style={{ background: "#02a95c", marginLeft: "-8px" }}
                    onClick={onClickSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="mt-6">
            <img className="inline mr-2" src="heart.svg" alt="icon" />
            Team Minecraft is organizing this fundraiser
          </div>
          <hr className="mt-6 mb-6" />
          <div className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return <Campaign />;
}
