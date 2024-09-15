import React, { useState } from "react";

const data = [
  {
    title: "accordian 1",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "accordian 2",
    description:
      "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "accordian 3",
    description:
      "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

function Accordian({ title, description }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p onClick={() => setShow(!show)} className="title">
        {title}
      </p>
      {show && <p className="description">{description}</p>}
    </div>
  );
}
function ListAccordian() {
  return (
    <div>
      {data.map(({ title, description }) => (
        <Accordian title={title} description={description} />
      ))}
    </div>
  );
  // const [count,setCount] = useState(0);
  // function increment(){
  //   setCount(count+1)
  // }
  // return (
  //   <div>
  //     <div>{count}</div>
  //     <button onClick={increment}>Increment</button>
  //   </div>
  // );
}

export default ListAccordian;
