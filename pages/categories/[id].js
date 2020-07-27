import Header from "../../components/header";
import Head from "next/head";
import { getCategoryById } from "../../lib/data";

const Category = ({ category }) => {
  return (
    <div className="container">
      <Head>
        <title>Waller Blamer - Category {category?.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>
      <div>
        <Header size="small" />
        <div className="container mx-auto px-24">
          <p className="text-2xl font-bold">{category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await getCategoryById(id);

  return { props: { category: data } };
}

export default Category;
