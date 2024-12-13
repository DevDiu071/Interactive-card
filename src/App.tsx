import Card from "./components/Card";
import Complete from "./components/Complete";
import Form from "./components/Form";
import { useState } from "react";

export interface infoProps {
  name: string;
  card: string;
  cvc: string;
  month: string;
  year: string;
}

const info = {
  name: "jANE APPLESEED",
  card: "0000 0000 0000 0000",
  cvc: "000",
  month: "00",
  year: "00",
};

export default function App() {
  const [cardInfo, setCardInfo] = useState<infoProps>(info);
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div className="lg:grid lg:grid-cols-[1fr_3fr] h-full lg:overflow-hidden">
      <Card cardInfo={cardInfo} />
      {!submitted ? (
        <Form setCardInfo={setCardInfo} setSubmitted={setSubmitted} />
      ) : (
        <Complete setSubmitted={setSubmitted} setCardInfo={setCardInfo} />
      )}
    </div>
  );
}
