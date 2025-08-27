type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-10 h-10 rounded-full mr-3" alt={name} />
      <div className="text-sm font-medium text-gray-900">{name}</div>
    </div>
  );
};

export default Avatar;
