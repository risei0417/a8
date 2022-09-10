export const lineBreak = (str: string) => {
  return str.split("<br>").map((p) => {
    return (
      <>
        {p}
        <br />
      </>
    );
  });
};
