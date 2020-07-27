import Header from "../../components/header.js";
const Expense = ({ id }) => {
  return (
    <div>
      <Header size="small" />
      <div className="container mx-auto px-24">
        <p className="text-lg">{id}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  return { props: { id } };
}

export default Expense;
