interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <p className="px-4 py-2 rounded-full  border bg-transparent text-white">
      {text}
    </p>
  );
};
