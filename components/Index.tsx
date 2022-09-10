type Props = {
  dummy?: string;
};

export const Index = (props: Props) => {
  const { dummy } = props;
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="center"
    >
      <h1>準備中です...</h1>
    </div>
  );
};
