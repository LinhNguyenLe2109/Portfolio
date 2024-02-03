import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p
        className={
          isReadMore &&
          "h-12 overflow-hidden after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-6 after:bg-stone-800 after:opacity-60 relative"
        }
      >
        {text}
      </p>
      <p
        onClick={toggleReadMore}
        className={`text-mainColor font-bold hover:underline cursor-pointer text-right`}
      >
        {isReadMore ? "read more" : " show less"}
      </p>
    </>
  );
};

function Timeline(props) {
  return (
    <div className="flex items-center justify-center text-stone-200">
      <ol className="items-center list-none w-full">
        {props.activities.map((activity, index) => {
          return (
            <li className="relative flex ">
              <div className=" w-1/2 relative flex flex-col items-center justify-center px-3">
                {index % 2 !== 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-mainColor">
                      {activity.cardTitle}
                    </h3>
                    <h4 className="text-base mx-0.5 font-bold">
                      {activity.title}
                    </h4>
                  </div>
                )}
                {index % 2 === 0 && (
                  <div className="flex flex-col items-center justify-center bg-stone-800 overflow-hidden rounded-2xl ">
                    <div className="w-full overflow-hidden rounded-2xl mb-3 ">
                      <img
                        src={activity.media.source.url}
                        alt={activity.media.name}
                        className="h-full w-full"
                      ></img>
                    </div>
                    <div className="mx-2 mb-2 relative">
                      <p className="font-bold text-mainColor">
                        {activity.cardSubtitle}
                      </p>
                      <ReadMore>{activity.cardDetailedText}</ReadMore>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                <div className=" h-full bg-mainColor w-0.5 0"></div>
                <div className="z-10 w-5 h-5 bg-mainColor rounded-full ring-4 ring-gray-600 shrink-0"></div>
                <div className=" h-full bg-mainColor w-0.5 0"></div>
              </div>
              <div className="mt-3 w-1/2 flex flex-col items-center justify-center px-3">
                {index % 2 === 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-mainColor">
                      {activity.cardTitle}
                    </h3>
                    <h4 className="text-base mx-0.5 font-bold">
                      {activity.title}
                    </h4>
                  </div>
                )}
                {index % 2 !== 0 && (
                  <div className="flex flex-col items-center justify-center bg-stone-800 overflow-hidden rounded-2xl">
                    <div className="w-full overflow-hidden rounded-2xl mb-3 ">
                      <img
                        src={activity.media.source.url}
                        alt={activity.media.name}
                        className="h-full w-full"
                      ></img>
                    </div>
                    <div className="mx-2 mb-2 relative">
                      <p className="font-bold text-mainColor">
                        {activity.cardSubtitle}
                      </p>
                      <ReadMore>{activity.cardDetailedText}</ReadMore>
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Timeline;
