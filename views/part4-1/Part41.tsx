import React from "react";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";

const Part41 = () => {
  return (
    <div>
      <h3 className="text-lg mb-4">
        1.Describe the concept of CSS specificity and explain how it determines
        which styles are applied to an element. Provide examples of different
        selectors and their relative specificity levels.
      </h3>
      <ExpandCollapse>
        <div className="flex flex-wrap gap-10">
          <div>
            <div className="mt-8 mb-2 font-bold text-2xl">
              How Specificity Works:
            </div>
            <table className="table-auto border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    Selector Type
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Specificity Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Inline styles
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <strong>1000</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    ID selectors (<code className="bg-gray-200">#id</code>)
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <strong>100</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Class selectors (<code className="bg-gray-200">.class</code>
                    )
                    <br />
                    Attribute selectors (
                    <code className="bg-gray-200">[type="text"]</code>)<br />
                    Pseudo-classes (<code className="bg-gray-200">:hover</code>)
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <strong>10</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Element selectors (<code className="bg-gray-200">div</code>,{" "}
                    <code className="bg-gray-200">h1</code>, etc.)
                    <br />
                    Pseudo-elements (
                    <code className="bg-gray-200">::before</code>)
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <strong>1</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Universal selector (<code className="bg-gray-200">*</code>),
                    combinators (<code className="bg-gray-200">+</code>,{" "}
                    <code className="bg-gray-200">&gt;</code>,{" "}
                    <code className="bg-gray-200">~</code>), and negation (
                    <code className="bg-gray-200">:not()</code>)
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <strong>0</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="mt-8 mb-2 font-bold text-2xl">
              Examples of Specificity Rankings:
            </div>
            <table className="table-auto border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Selector</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Specificity Score
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">h1</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    One element selector
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">.title</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">10</td>
                  <td className="border border-gray-400 px-4 py-2">
                    One class selector
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">#main</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">100</td>
                  <td className="border border-gray-400 px-4 py-2">
                    One ID selector
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">div.title</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">11</td>
                  <td className="border border-gray-400 px-4 py-2">
                    One element + one class
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">section #main .title h1</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">112</td>
                  <td className="border border-gray-400 px-4 py-2">
                    ID (100) + class (10) + element (1) + element (1)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <code className="bg-gray-200">style="color: red"</code>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">1000</td>
                  <td className="border border-gray-400 px-4 py-2">
                    Inline style
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="mt-8 mb-2 font-bold text-2xl">Which Rule Wins?</div>
          <ul className="ml-4">
            <li className="list-disc list-inside">
              If two rules apply to the same element: The one with higher
              specificity wins.
            </li>
            <li className="list-disc list-inside">
              If specificity is equal, the later rule in the CSS wins.
            </li>
          </ul>
        </div>
        <div>
          <div className="mt-8 mb-2 font-bold text-2xl">
            Advanced CSS Specificity Concepts
          </div>

          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Concept</th>
                <th className="border border-gray-400 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Example / Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Specificity Hierarchy
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Inline styles &gt; IDs &gt; Classes &gt; Elements &gt;
                  Universal
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">style=""</code> wins over
                  everything else
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  !important Rule
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Overrides all other declarations (except other{" "}
                  <code className="bg-gray-200">!important</code> with higher
                  specificity)
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Use sparingly – it can break maintainability
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Chained Selectors
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  More selectors = more specific
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">.card .title h1</code>{" "}
                  (specificity: 1 + 10 + 1 = 12)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Pseudo-classes vs. Classes
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">:hover</code>,{" "}
                  <code className="bg-gray-200">:nth-child()</code> carry same
                  weight as a class
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Same weight = 10
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  :not() Selector
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  The selector inside{" "}
                  <code className="bg-gray-200">:not()</code> affects
                  specificity, not the <code className="bg-gray-200">:not</code>{" "}
                  itself
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">:not(.hidden)</code> → counts as{" "}
                  <code className="bg-gray-200">.hidden</code> (10)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Combining Selectors
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Combining multiple selectors increases specificity
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">ul li a.active</code> = 1 (ul) +
                  1 (li) + 1 (a) + 10 (
                  <code className="bg-gray-200">.active</code>) = 13
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Repeated Selectors
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Repetition increases specificity
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <code className="bg-gray-200">#id#id</code> = 200 (but usually
                  redundant)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Inheritance Does Not Affect Specificity
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Inherited styles don’t count toward specificity
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Children inherit from parents unless overridden
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandCollapse>
    </div>
  );
};

export default Part41;
