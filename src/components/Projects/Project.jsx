import React from "react";
import classes from "../../styles/Projects/Project.module.css";
import { Zoom } from "react-awesome-reveal";
const Project = (props) => {
  return (
    <Zoom triggerOnce="true">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className={`${classes.project} my-10 p-4 rounded-2xl`}>
          {/* todo */}
          <div className="md:flex items-center">
            <div className="desc">
              <h3 className="text-2xl text-mainColor text-center font-semibold">
                {props.name}
              </h3>

              <p className="techStack text-sm mb-2 text-center">
                {props.techStack.join(", ")}
              </p>
              <hr className="my-3 mx-10" />

              <ul className="list-disc list-inside">
                {props.desc.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="imgHolder max-w-lg mx-auto">
              <img
                alt="Project's Prototype"
                src={props.imgLink}
                className="w-full max-w-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </a>
    </Zoom>
  );
};

export default Project;

// const Project = (props) => {
//     const { img, disc } = props.item;
//   return (
//     <Container className='project'>
//         <img src={img} alt="project" />
//         <div className="disc">
//             <h1>Description</h1>
//             <p>{disc}
//             <a href="/">demo</a>
//             </p>
//         </div>
//     </Container>
//   )
// }

// export default Project;

// const Container = styled.div`
//     height: 10rem;
//     background-color: #4e5156;
//     margin: 0 0.5rem;
//     padding: 0.5rem;
//     border-radius: 5px;
//     cursor: pointer;
//     position: relative;
//     overflow: hidden;
//     img{
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         transition: transform 400ms ease-in-out;
//     }
//     .disc{
//         position: absolute;
//         right: 0;
//         left: 0;
//         bottom: -10rem;
//         text-align: left;
//         padding: 0.5rem;
//         background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
//         transition: all 400ms ease-in-out;
//         h1{
//             font-size: 1rem;
//         }

//         p{
//             width: 90%;
//             font-size: 0.8rem;
//             a{
//                 margin-left: 0.4rem;
//                 color: red;
//             }
//         }
//     }

//     :hover > img{
//         transform: scale(1.3);
//     }

//     :hover > .disc{
//         bottom: 0;
//     }

// `
