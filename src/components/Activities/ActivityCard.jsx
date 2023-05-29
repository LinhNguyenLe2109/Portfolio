import React from "react";

function ActivityCard() {
  return (
    <React.Fragment>
      <div className="flex mb-4">
        <h3 className="text-4xl text-mainColor">May, 2023</h3>
        <div
          aria-hidden="true"
          className="flex-grow border-b-2 border-s-2 ms-2"
        ></div>
      </div>
      <div className="flex justify-around items-center flex-col lg:flex-row">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt
          possimus fugiat laborum unde aperiam assumenda provident, facere
          eligendi totam cum debitis dolorum qui ratione exercitationem ipsam
          doloribus quos, facilis voluptates iusto voluptatem magni? Voluptatem
          vitae repudiandae aperiam quisquam ipsam odit earum doloremque
          officiis consequatur. Modi facilis aut iure magni, doloribus voluptas
          dignissimos impedit repellat asperiores iusto dolore temporibus
          aperiam vel dolor ullam ratione recusandae ut! Laudantium vel
          perferendis deleniti repellendus nulla quas labore iusto expedita
          dignissimos. Error aspernatur sit laboriosam dolorum! Error labore
          cumque aliquid assumenda ea molestiae ab odit quos accusantium officia
          ipsa, quia tempora, soluta laboriosam similique?
        </p>
        <img
          alt="Project's Prototype"
          src="\images\inProgress.png"
          className="object-cover max-w-xs lg:mt-0 mt-5 lg:ms-7 ms-0"
        />
      </div>
    </React.Fragment>
  );
}

export default ActivityCard;
