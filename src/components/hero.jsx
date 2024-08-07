import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { ComputerCanvas } from '.';
import { TextAnimation } from '.';

const Hero = ({ scrollContainer }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallax3Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const parallax4Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const parallax5Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const parallax6Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="parallax-container" ref={ref}>
      <div className="grid-top"></div>
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='nametag font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
            IVAN R. BENEDETTI
          </h1>
        </div>
      </div>

      <motion.img
        className="parallax parallax-3"
        src="./parallax/3.png"
        alt=""
        style={{ y: parallax3Y }}
      />
      <motion.img
        className="parallax parallax-4"
        src="./parallax/4.png"
        alt=""
        style={{ y: parallax4Y }}
      />
      <motion.img
        className="parallax parallax-5"
        src="./parallax/5.png"
        alt=""
        style={{ y: parallax5Y }}
      />
      <motion.img
        className="parallax parallax-6"
        src="./parallax/6.png"
        alt=""
        style={{ y: parallax6Y }}
      />
      
      <div className='text-anim z-10'>
        <TextAnimation />
      </div>

      <ComputerCanvas className="computer-canvas absolute" scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
