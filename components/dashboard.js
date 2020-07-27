import { timeSince } from "../lib/date.helper";
const Dashboard = ({ categories, expenses }) => {
  return (
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-20">
        {categories &&
          categories.map((item) => (
            <div key={item.id}>
              <div className="shadow-md">
                <div className="flex justify-between">
                  <p className="flex-auto text-3xl px-5 py-3 font-semibold">
                    {item.name}
                  </p>
                  <p className="flex-auto text-xl  px-3 py-4 text-right text-gray-600">
                    $100
                  </p>
                </div>
                <ul className="list-none px-8 py-5">
                  {expenses
                    ?.filter((f) => f.category?.id === item.id)
                    ?.map((exp) => (
                      <li key={exp.id}>
                        <p className="text-xs inline mb-4 text-gray-400 justify-center">
                          {timeSince(new Date(exp.createdAt))} ago
                        </p>
                        <p className="text-sm mb-6 inline mx-4">
                          {exp.description}
                        </p>

                        <i
                          aria-hidden
                          className={
                            exp.type === "income"
                              ? "fa fa-arrow-right text-green-400"
                              : "fa fa-arrow-left text-red-400"
                          }
                        ></i>
                        <p className="inline text-sm mx-2 text-gray-500">
                          ${exp.amount}
                        </p>
                      </li>
                    ))}

                  <li className="text-gray-500 text-xl text-right">
                    <a href={`/categories/${item.id}`}>... more</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
