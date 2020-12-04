import Link from "next/link";
import Head from "next/head";
import Layout from "../../src/component/layout";

export default function FirstPost() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
      <style jsx>
        {`
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
