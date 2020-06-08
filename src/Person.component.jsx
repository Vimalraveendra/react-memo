import React from "react";
// well there is a way to actually improve our person component by
// using React memo. React memo is a way for us to memoize components
//so that components does not re render if the props value do not
// change .React.memo on functional component allows our component to
// check the new props against the old props to see if the value has changed.
const Person = ({ person }) => {
  console.log("rendering");
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

export default React.memo(Person);
