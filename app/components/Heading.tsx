// /app/components/Heading.tsx

interface HeadingProps {
  text: string;
  text2?: string;
  className?: string;
}

const Heading = ({ text, text2, className }: HeadingProps) => {
  return (
    <h1 className={`text-center ${className}  justify-center space-x-2 font-[600] font-robotoSlab text-[32px] md:text-[40px] leading-10 md:leading-[52.75px] md:tracking-[-5%]`}>
        <span className={`text-havilah-deep-cove`}>{text}</span>
        <span className={`text-havilah-whiskey`}>{text2}</span>
    </h1>
  );
};

export default Heading;
