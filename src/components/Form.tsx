import { FieldErrors, useForm } from "react-hook-form";
import ErrorComponent from "./ErrorComponent";
import clsx from "clsx";
import { infoProps } from "../App";

type FormProps = {
  setCardInfo: React.Dispatch<React.SetStateAction<infoProps>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setCardInfo, setSubmitted }: FormProps) {
  const { register, handleSubmit, formState, reset } = useForm<infoProps>();
  const { errors } = formState;

  function submit(data: infoProps) {
    console.log(data.cvc);
    setCardInfo({
      name: data.name,
      card: data.card,
      cvc: data.cvc,
      month: data.month,
      year: data.year,
    });
    setSubmitted(true);
    reset();
  }

  function handleError(error: FieldErrors<infoProps>) {
    console.log(error);
  }

  function formatCreditCard(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space every 4 digits
    input.value = value;
  }

  return (
    <form
      className="flex flex-col max-w-[390px] mx-auto mt-[130px] h-full px-4"
      onSubmit={handleSubmit(submit, handleError)}
    >
      <label
        htmlFor="name"
        className="text-xs font-semibold mb-1.5 text-Very-dark"
      >
        CARDHOLDER NAME
      </label>
      <input
        type="text"
        id="name"
        placeholder="eg. Jane Appleseed"
        {...register("name", { required: "Can't be blank" })}
        className={clsx(
          "border border-Light-grayish px-4 py-1.5 rounded-lg text-Very-dark",
          {
            "border-Red": errors?.name?.message,
          }
        )}
      />
      {errors?.name?.message && (
        <ErrorComponent error={`${errors?.name?.message}`} />
      )}
      <label
        htmlFor="number"
        className="text-xs mt-4 font-semibold mb-1.5 text-Very-dark"
      >
        CARD NUMBER
      </label>
      <input
        type="text"
        id="card"
        onKeyUp={(e) => formatCreditCard(e)}
        maxLength={19}
        {...register("card", {
          required: "Can't be blank",
          validate: {
            validate: (value) => value.length === 19 || "Requires 16 digits",
          },
        })}
        placeholder="eg. 1234 5678 9123 0000"
        className={clsx(
          "border border-Light-grayish px-4 py-1.5 rounded-lg text-Very-dark",
          {
            "border-Red": errors?.card?.message,
          }
        )}
      />
      {errors?.card?.message && (
        <ErrorComponent error={`${errors?.card?.message}`} />
      )}

      <div className="mt-4">
        <div className="grid grid-cols-[1fr_2fr] gap-x-4 mt-1.5">
          <div className="flex gap-x-2">
            <div>
              <label
                htmlFor="month"
                className="text-xs font-semibold text-Very-dark"
              >
                EXP. DATE(MM/YY)
              </label>
              <div className="flex gap-x-2 mt-1">
                <div>
                  <input
                    type="text"
                    id="month"
                    placeholder="MM"
                    maxLength={2}
                    {...register("month", {
                      required: "Can't be blank",
                      validate: (value: string) => {
                        if (Number(value) > 12) {
                          return "Range 1- 12";
                        }
                        if (/[^0-9\s]/.test(value)) {
                          return "Only numbers";
                        }
                        if (value.length < 2) {
                          return "Pattern (01 etc)";
                        }
                      },
                    })}
                    className={clsx(
                      "border w-[90px] border-Light-grayish px-4 py-1.5 rounded-lg text-Very-dark",
                      { "border-Red": errors?.month?.message }
                    )}
                  />
                  {errors?.month?.message && (
                    <ErrorComponent error={`${errors?.month?.message}`} />
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    id="year"
                    maxLength={2}
                    {...register("year", {
                      required: "Can't be blank",
                      validate: (value: string) => {
                        if (Number(value) < 24) {
                          return "24 onward";
                        }
                        if (/[^0-9\s]/.test(value)) {
                          return "Only numbers";
                        }
                        return true;
                      },
                    })}
                    placeholder="YY"
                    className={clsx(
                      "border w-[90px] border-Light-grayish px-4 py-1.5 rounded-lg text-Very-dark",
                      { "border-Red": errors?.year?.message }
                    )}
                  />
                  {errors?.year?.message && (
                    <ErrorComponent error={`${errors?.year?.message}`} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="text-xs font-semibold text-Very-dark"
            >
              CVC
            </label>
            <div>
              <input
                type="text"
                id="cvc"
                placeholder="eg. 123"
                maxLength={3}
                {...register("cvc", {
                  required: "Can't be blank",
                  validate: (value: string) => {
                    if (/[^0-9\s]/.test(value)) {
                      return "Only numbers";
                    }
                    if (value.length < 3) {
                      return "Requires 3 digits";
                    }
                  },
                })}
                className={clsx(
                  "border mt-1 border-Light-grayish px-4 py-1.5 rounded-lg w-full text-Very-dark",
                  {
                    "border-Red": errors?.cvc?.message,
                  }
                )}
              />
              {errors?.cvc?.message && (
                <ErrorComponent error={`${errors?.cvc?.message}`} />
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="text-sm mt-10 font-semibold mb-10 bg-Very-dark rounded-lg text-White py-2.5 px-4">
        Submit
      </button>
    </form>
  );
}
