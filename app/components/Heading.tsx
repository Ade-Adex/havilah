// /app/components/Heading.tsx

interface HeadingProps {
  text: string;
  text2?: string;
}

const Heading = ({ text, text2 }: HeadingProps) => {
  return (
    <h1 className={`text-center flex flex-col md:flex-row justify-center md:gap-1 font-[600] text-[32px] md:text-[40px] leading-10 md:leading-[52.75px] md:tracking-[-5%]`}>
        <span className={`text-havilah-deep-cove`}>{text}</span>
        <span className={`text-havilah-whiskey`}>{text2}</span>
    </h1>
  );
};

export default Heading;
