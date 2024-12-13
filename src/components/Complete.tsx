import { infoProps } from "../App";

interface CompleteProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setCardInfo: React.Dispatch<React.SetStateAction<infoProps>>;
}

export default function Complete({ setSubmitted, setCardInfo }: CompleteProps) {
  function handleReset() {
    setCardInfo({
      name: "jANE APPLESEED",
      card: "0000 0000 0000 0000",
      cvc: "000",
      month: "00",
      year: "00",
    });
    setSubmitted(false);
  }
  return (
    <div className="flex flex-col max-w-[370px] lg:w-[370px] mx-auto md:mt-[200px] mt-[130px] h-full px-4 text-center">
      <div className="flex justify-center">
        <img
          src="/images/icon-complete.svg"
          alt="icon-complete"
          className="w-[50px]"
        />
      </div>
      <h2 className="text-3xl text-Very-dark my-2">Thank you!</h2>
      <p className="text-sm text-Dark-grayish">
        We have added your card details
      </p>
      <button
        onClick={handleReset}
        className="text-sm mt-10 font-semibold w-full mb-10 bg-Very-dark rounded-lg text-White py-2.5 px-8"
      >
        Continue
      </button>
    </div>
  );
}
