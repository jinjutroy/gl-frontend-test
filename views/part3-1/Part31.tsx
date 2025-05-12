import React from "react";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";

export default function Part31() {
  return (
    <div>
      <h3 className="text-lg mb-4">
        1.Briefly explain the concept of props and state in ReactJS and how they
        are used to manage data flow within components.
      </h3>
      <ExpandCollapse>
        <div className="flex flex-wrap justify-between text-md">
          <table className="table-auto border-collapse border border-gray-400 text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Aspect</th>
                <th className="border border-gray-400 px-4 py-2">Props</th>
                <th className="border border-gray-400 px-4 py-2">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  What
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Props are read-only data passed from a parent component to a
                  child component.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  State is data that is managed within a component and can
                  change over time.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Use case
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  For customizing or configuring a child component.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  For tracking user input, toggles, counters, etc.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Direction
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Data flows from parent ➝ child.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Data is managed locally, but can be lifted up if needed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 mb-2 font-bold text-2xl">
          Props vs State — Data Flow
        </div>
        <div className="flex flex-wrap justify-between text-md">
          <table className="table-auto border-collapse border border-gray-400 text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Feature</th>
                <th className="border border-gray-400 px-4 py-2">Props</th>
                <th className="border border-gray-400 px-4 py-2">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Direction
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  From parent ➝ child
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Stays within the component
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Controlled by
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Parent component
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Current component
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Mutable?
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ❌ No (read-only)
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ✅ Yes (can be updated)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Usage
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Pass static or controlled data
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  Handle dynamic data like inputs
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  Triggers Re-render?
                </td>
                <td className="border border-gray-400 px-4 py-2">✅ Yes</td>
                <td className="border border-gray-400 px-4 py-2">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 font-bold text-xl">Advanced Concepts:</div>
        <table className="table-auto border-collapse border border-gray-400 text-left mt-3">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Concept</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Related To</th>
              <th className="border border-gray-400 px-4 py-2">Key Benefit</th>
              <th className="border border-gray-400 px-4 py-2">
                Common Pitfall
              </th>
            </tr>
          </thead>
          <tbody>
            {advancedConcepts.map((concept, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2 font-semibold">
                  {concept.concept}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {concept.description}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {concept.relatedTo}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {concept.keyBenefit}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {concept.commonPitfall}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ExpandCollapse>
    </div>
  );
}

const advancedConcepts = [
  {
    concept: "Prop Drilling",
    description: "Passing props through many layers of components",
    relatedTo: "Props",
    keyBenefit: "Simple for small trees",
    commonPitfall: "Becomes messy in large apps",
  },
  {
    concept: "State Lifting",
    description:
      "Moving state up to the nearest common ancestor for shared logic",
    relatedTo: "State",
    keyBenefit: "Syncs data between siblings",
    commonPitfall: "Requires careful design of component tree",
  },
  {
    concept: "Derived State from Props",
    description: "Compute values from props instead of copying into state",
    relatedTo: "Both",
    keyBenefit: "Avoids duplicate state",
    commonPitfall: "Don’t copy props to state unless necessary",
  },
  {
    concept: "Controlled Components",
    description: "Form elements whose values are controlled via state",
    relatedTo: "State",
    keyBenefit: "Full control over inputs",
    commonPitfall: "More verbose; needs more code",
  },
  {
    concept: "Uncontrolled Components",
    description: "Use `ref` to access DOM elements directly (less state usage)",
    relatedTo: "Neither",
    keyBenefit: "Quick setup for simple forms",
    commonPitfall: "Harder to validate or control dynamically",
  },
  {
    concept: "Performance Optimization",
    description: "Prevent unnecessary renders using memoization tools",
    relatedTo: "Both",
    keyBenefit: "Better performance in large apps",
    commonPitfall: "Premature optimization can complicate logic",
  },
  {
    concept: "useCallback & useMemo",
    description: "Memoize functions and computed values",
    relatedTo: "State",
    keyBenefit: "Avoid re-renders or heavy recalculations",
    commonPitfall: "Must be used with correct dependencies",
  },
  {
    concept: "Custom Hooks",
    description: "Encapsulate reusable logic into a hook",
    relatedTo: "State",
    keyBenefit: "Clean, reusable, testable logic",
    commonPitfall: "Becomes abstract if not documented well",
  },
  {
    concept: "Global State Management",
    description:
      "Manage state across unrelated components (Redux, Zustand, Recoil, etc.)",
    relatedTo: "State",
    keyBenefit: "Centralized, scalable data control",
    commonPitfall: "Adds complexity & setup",
  },
  {
    concept: "Context API",
    description:
      "Avoid prop drilling by providing global-like props to children",
    relatedTo: "Props",
    keyBenefit: "Cleaner sharing of data across tree",
    commonPitfall: "Overuse may affect performance",
  },
];
