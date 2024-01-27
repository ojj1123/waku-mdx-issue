import { Link } from "waku";

// @ts-expect-error no exported member
import { compileMDX } from "next-mdx-remote/rsc";

export const HomePage = async () => {
  const data = await getData();
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: `---
      title: RSC Frontmatter Example
      ---
      # Hello World
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  });
  return (
    <div>
      <title>{data.title}</title>
      {content}
      <Link to='/about' className='mt-4 inline-block underline'>
        Learn more
      </Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  };

  return data;
};
