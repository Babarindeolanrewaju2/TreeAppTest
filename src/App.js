import React, { useState, useLayoutEffect } from "react";
import "./styles.css";

import Tree from "./Tree/Tree";

const structure = [
  {
    type: "folder",
    name: "downloads",
    files: [
      {
        type: "file",
        name: "package.js",
      },
    ],
  },
  {
    type: "folder",
    name: "desktop",
    files: [
      {
        type: "folder",
        name: "pictures",
        files: [
          { type: "file", name: "index.js" },
          { type: "file", name: "app.js" },
          { type: "file", name: "app.style.js" },
        ],
      },
      {
        type: "folder",
        name: "documents",
        files: [
          { type: "file", name: "jsconfig.js" },
          { type: "file", name: "app.style.js" },
        ],
      },
      {
        type: "folder",
        name: "compressed",
        files: [
          { type: "file", name: "package.js" },
          { type: "file", name: "app.style.js" },
        ],
      },
      {
        type: "folder",
        name: "directory",
        files: [
          {
            type: "folder",
            name: "redux",
            files: [
              { type: "file", name: "README.js" },
              { type: "file", name: "styles.js" },
              { type: "file", name: "styles.style.js" },
            ],
          },
          {
            type: "folder",
            name: "complete-react",
            files: [
              { type: "file", name: "manifest.js" },
              { type: "file", name: "styles.style.js" },
            ],
          },
          {
            type: "folder",
            name: "server-side",
            files: [
              { type: "file", name: "manifest.js" },
              { type: "file", name: "app.style.js" },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "folder",
    name: "videos",
    files: [
      {
        type: "file",
        name: "helper.js",
      },
    ],
  },
  {
    type: "folder",
    name: "local disk",
    files: [
      {
        type: "file",
        name: "package.js",
      },
    ],
  },
];

export default function App() {
  let [data, setData] = useState(structure);

  const handleClick = (node) => {
    console.log(node);
  };
  const handleUpdate = (state) => {
    localStorage.setItem(
      "tree",
      JSON.stringify(state, function (key, value) {
        if (key === "parentNode" || key === "id") {
          return null;
        }
        return value;
      })
    );
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem("tree"));
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />
    </div>
  );
}
