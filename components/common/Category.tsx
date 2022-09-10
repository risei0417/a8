type Props = {
  category: string;
};

export const Category = (props: Props) => {
  const { category } = props;

  return (
    <>
      <div>{category}</div>
    </>
  );
};
