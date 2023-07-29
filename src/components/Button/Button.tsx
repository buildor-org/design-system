interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button = ({ variant }: ButtonProps) => {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-red-500 hover:bg-red-600',
  };

  return <button className={`rounded-md ${styles[variant]}`}>Button</button>;
};
