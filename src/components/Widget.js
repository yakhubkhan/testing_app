
import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

function Widget(props) {
  const nodes = [
    {
      
              value: "this is from disc folder",
              label: "Disc",
              showCheckbox: false,
              children: [
                {
                  value: "this is from A folder",
                  label: "A",
                  showCheckbox: false,
                  children: [
                    { value: "a-1", label: "a-1", showCheckbox: false },
                    { value: "a-2", label: "a-2", showCheckbox: false },
                  ],
                },
                { value: "B", 
                label: "B", 
                showCheckbox: false,
                children: [
                  { value: "b-1", label: "b-1", showCheckbox: false },
                  { value: "b-2", label: "b-2", showCheckbox: false },
                  { value: "b-3", label: "b-3", showCheckbox: false ,
                  children: [
                    { value: "b3-1", label: "b3-1", showCheckbox: false },
                    { value: "b3-2", label: "b3-2", showCheckbox: false },
                  ]
                },
                ]
               },
              ],
            },
          ];
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const onClick = (clicked) => {
    console.log(clicked);
    props.content(clicked.value);
  };

  return (
    <CheckboxTree
      nodes={nodes}
      expanded={expanded}
      onClick={onClick}
      onCheck={setChecked}
      onExpand={setExpanded}
    />
  );
}

export default Widget;