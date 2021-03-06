import data from "../public/data.json";
import Title from "./Title";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-10 px-16">
      <Title num={2} title="Testimonials" />

      <div className="flex w-screen px-4  space-x-10 overflow-x-scroll hideScrollBar md:mx-auto md:-mr-0">
        {data.testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="rotate-3 hover:rotate-0 cursor-pointer duration-100 backdrop-filter backdrop-blur-3xl shadow-2xl border-2 border-darkerBlue  bg-white/5  px-4 my-10 pb-3 md:w-[400px] min-w-[300px] rounded-lg"
          >
            <h2 className="pt-5">{testimonial.value}</h2>
            <a
              href={testimonial.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4"
            >
              <div className="relative w-12 h-12 mt-4 rounded-full">
                <Image
                  width={250}
                  height={250}
                  src={testimonial.pfp}
                  alt={testimonial.name}
                  className="w-12 h-12 mt-4 rounded-full"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mt-4 text-white">{testimonial.name}</h2>
                <h2 className="text-white">{testimonial?.relation}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
