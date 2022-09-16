type Props = {
  onClick: () => void;
  name?: string;
}

export const HeaderLink = (props: Props) => {
  const { onClick, name } = props;

  return (
    <a onClick={onClick} className="center link">
      {name}
    </a>
  );
};
