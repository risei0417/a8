import Link from "next/link";

type Props = {
  url: string;
  name?: string;
};

export const HeaderLink = (props: Props) => {
  const { url, name } = props;

  return (
    <Link href={url}>
      <a className="center link">
        {name}
      </a>
    </Link>
  );
};
