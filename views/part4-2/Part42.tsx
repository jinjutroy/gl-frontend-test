import React from "react";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";
import { Sandpack } from "@codesandbox/sandpack-react";

const Part42 = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg mb-4">
        2.What is a CSS Grid? Briefly describe its advantages over Flexbox and
        explain how you would use it to create a responsive two-column layout
        with a sidebar on the left and main content on the right.
      </h3>
      <ExpandCollapse>
        <div>
          <h4 className="mt-4 mb-2 font-bold text-2xl">What is CSS Grid?</h4>
          <div>
            CSS Grid is a two-dimensional layout system in CSS that allows you
            to design web layouts using rows and columns. Unlike Flexbox (which
            is one-dimensional), CSS Grid can control both axes (horizontal and
            vertical), making it ideal for complex layouts like dashboards,
            magazines, or app shells.
          </div>
        </div>
        <div className="mb-8">
          <h4 className="mt-4 mb-2 font-bold text-2xl">
            Advantages of CSS Grid over Flexbox
          </h4>
          <div>
            <table className="table-auto border-collapse border border-gray-400 text-left">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Feature</th>
                  <th className="border border-gray-400 px-4 py-2">Flexbox</th>
                  <th className="border border-gray-400 px-4 py-2">CSS Grid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Layout direction
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    One-dimensional (row or column)
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Two-dimensional (row and column)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Best use-case
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Aligning items in a row/column
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Building full page or complex layouts
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Overlapping items
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Difficult
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Easy with grid layers (`grid-area`)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Positioning control
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Limited to content flow
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Precise control over placement
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Empty space management
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Harder to handle
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Grid handles gaps and tracks easily
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mb-2">
          <span className="text-red-400">*Note:</span>To test responsiveness,
          simply drag the editor's edge — there's no need to open the browser's
          developer tools
        </p>
        <Sandpack
          template="react"
          theme="dark"
          options={{
            wrapContent: true,
            showLineNumbers: false,
            editorWidthPercentage: 30,
            editorHeight: 800,
            resizablePanels: true,
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
          files={{
            "/index.html": {
              code: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title> 
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
      `.trim(),
              hidden: true,
            },
            "/App.js": {
              code: `
  import React, { useState } from "react";  
  export default function App() {
   
    return (
    <div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {/* Sidebar */}
      <aside className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-2">Sidebar</h2>
        <p>Navigation or filters here.</p>
      </aside>

      {/* Main Content */}
      <main className="bg-white p-4">
        <h1 className="text-xl font-bold mb-2">Main Content</h1>
        <p>This is the main content area.</p>
      </main>

      {/* Extra Section */}
      <section className="bg-gray-50 p-4 hidden lg:block">
        <h2 className="text-lg font-semibold mb-2">Extra</h2>
        <p>Additional content like ads, tools, etc.</p>
      </section> 
    </div>
    <div className="ml-4">
        <h4 className="mt-4 mb-2 font-bold text-2xl">CSS Grid Classes</h4>
        <ul className="list-disc list-inside ml-6">
          <li>
            <span className="font-semibold">grid-cols-1:</span> 1 column on
            mobile
          </li>
          <li>
            <span className="font-semibold">md:grid-cols-2:</span> 2 columns
            on tablets
          </li>
          <li>
            <span className="font-semibold">lg:grid-cols-3:</span> 3 columns
            on laptops/desktops
          </li>
          <li>
            <span className="font-semibold">hidden lg:block:</span> Hides
            the third column on smaller screens
          </li>
        </ul>
      </div>
    </div>
    );
  }
  `,
            },
            "/index.js": {
              code: `
  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App";
  
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
            `.trim(),
              hidden: true,
            },
          }}
        />
      </ExpandCollapse>
    </div>
  );
};

export default Part42;
