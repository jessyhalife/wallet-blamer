const fetchGqlAPI = async (query, { variables, preview } = {}) => {
  const res = await fetch(process.env.GRAPH_CMS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    throw Error("Failed to fetch from api");
  }
  return json.data;
};

const getAllExpenses = async () => {
  const data = await fetchGqlAPI(`query  {
        expenses {
          id
          description
          createdAt
          updatedAt
          amount
          type
          category {
            id
            name
            color {
              hex
            }
          }
        }
      }
    `);
  return data.expenses;
};

const getCategories = async () => {
  const data = await fetchGqlAPI(` query {
    categories {
      id
      name
      color {
        hex
      }
    }
  }
`);
  return data.categories;
};

const getCategoryById = async (id) => {
  const data = await fetchGqlAPI(
    `query Category($id: ID!){
    categories(where: {id: $id}){
      id
      name 
      color{
        hex
      }
    }
  }`,
    {
      preview: false,
      variables: { id },
    }
  );
  return data.categories && data.categories[0];
};

export { getAllExpenses, getCategories, getCategoryById };
