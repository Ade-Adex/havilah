// /app/components/Heading.tsx

interface HeadingProps {
  text: string;
  text2?: string;
  className?: string;
}

const Heading = ({ text, text2, className }: HeadingProps) => {
  return (
    <h1 className={`text-center ${className} space-x-2 font-[600] font-robotoSlab text-[32px] lg:text-[38px] xl:text-[40px] leading-10 md:leading-[52.75px] md:tracking-[-5%]`}>
        <span className={`text-havilah-deep-cove dark:text-white`}>{text}</span>
        <span className={`text-havilah-whiskey`}>{text2}</span>
    </h1>
  );
};

export default Heading;
