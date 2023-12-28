interface SpacerProps {
  space: string;
}

const Spacer = ({ space }: SpacerProps) => {
  return <div className={space}></div>;
};

export default Spacer;
