import Head from "next/head";
import Header from "../components/header";
import Dashboard from "../components/dashboard";
import { getAllExpenses, getCategories } from "../lib/data";
export default function Home({ expenses, categories }) {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  return (
    <div className="container">
      <Head>
        <title>Waller Blamer.</title>
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
      <Header size="big" />
      <div className="container mx-auto px-5">
        <h1 className="text-2xl tracking-tighter leading-tight mx-10 mb-20">
          from <b>{month}</b>
        </h1>
        <section>
          <Dashboard categories={categories} expenses={expenses} />
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const expenses = await getAllExpenses();
  const categories = await getCategories();

  return { props: { expenses, categories } };
}
