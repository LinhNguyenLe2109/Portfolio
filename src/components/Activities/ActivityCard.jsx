import React from "react";

function ActivityCard(props) {
  return (
    <div className="mb-28">
      <div className="flex mb-14">
        <h3 className="text-4xl text-mainColor">{props.month}, {props.year}</h3>
        <div
          aria-hidden="true"
          className="flex-grow border-b-2 border-s-2 ms-2"
        ></div>
      </div>
      <div className="flex justify-around items-center lg:items-start flex-col lg:flex-row">
        {props.desc && (
          <p className="description">
            {props.desc}
          </p>
        )}
        {props.imgLink && (
          <img
            alt="Project's Prototype"
            src={props.imgLink}
            className="object-cover md:max-w-md max-w-xs lg:mt-0 mt-5 lg:ms-7 ms-0"
          />
        )}
      </div>
    </div>
  );
}

export default ActivityCard;
