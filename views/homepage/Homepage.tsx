import Part1 from "../part1-1/Part1";
import Part12 from "../part1-2/Part12";
import Part21 from "../part2-1/Part21";
import Page22 from "../part2-2/Part22";
import Part31 from "../part3-1/Part31";
import Part32 from "../part3-2/Part32";
import Part41 from "../part4-1/Part41";
import Part42 from "../part4-2/Part42";

const Homepage = () => {
  return (
    <div className="bg-white py-20 px-10 text-black">
      <h1 className="text-5xl font-bold mb-10 text-center">FRONTEND TEST</h1>
      <div className="part-1">
        <h3 className="font-bold text-3xl mb-8">
          Part 1: Responsive HTML & CSS
        </h3>
        <Part1 />
        <Part12 />
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-8 mt-16">Part 2: JavaScript</h3>
        <Part21 />
        <Page22 />
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-8 mt-16">
          Part 3: ReactJS & TailwindCSS
        </h3>
        <Part31 />
        <Part32 />
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-8 mt-16">
          Part 4: Problem Solving & Advanced Concepts
        </h3>
        <Part41 />
        <Part42 />
      </div>
    </div>
  );
};

export default Homepage;
