interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return <p className="p-2 bg-green-400 text-black">{text}</p>;
};
