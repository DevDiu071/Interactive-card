import { infoProps } from "../App";

interface CardProps {
  cardInfo: infoProps;
}

export default function Card({ cardInfo }: CardProps) {
  return (
    <div className="lg:h-[100vh] h-[170px] lg:bg-[url(/images/bg-main-desktop.png)] pt-6 bg-[url(/images/bg-main-mobile.png)]  bg-cover lg:mr-10 ">
      <div className="lg:absolute lg:left-[100px] lg:top-[100px] flex flex-col items-center">
        <div className="bg-[url(/images/bg-card-front.png)] bg-cover order-2 lg:order-1 -ml-12 -mt-10 lg:h-[160px] lg:w-[300px] h-[120px] w-[260px] rounded-md">
          <img
            src="/images/card-logo.svg"
            alt="card-logo"
            className="lg:w-[50px] w-[40px] m-4"
          />
          <p className="text-White text-center text-sm lg:text-2xl mt-4 lg:mt-8">
            {cardInfo.card}
          </p>
          <div className="flex items-center justify-between mt-4 mx-9">
            <p className="text-White text-xs">{cardInfo.name.toUpperCase()}</p>
            <p className="text-White text-xs">
              {cardInfo.month}/{cardInfo.year}
            </p>
          </div>
        </div>
        <div className="bg-[url(/images/bg-card-back.png)] bg-cover order-1 lg:order-2 lg:mt-6 lg:h-[160px] lg:w-[300px] h-[120px] w-[260px] rounded-md ml-[50px]">
          <p className="lg:mt-[70px] mt-[58px] text-sm  text-White text-right mr-10">
            {cardInfo.cvc}
          </p>
        </div>
      </div>
    </div>
  );
}
