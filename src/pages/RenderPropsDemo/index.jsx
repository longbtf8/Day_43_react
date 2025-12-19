import DataFetcher from "../../components/DataFetcher";

const RenderPropsDemo = () => {
  return (
    <div className="p-4">
      <DataFetcher url={"https://jsonplaceholder.typicode.com/posts?_limit=5"}>
        {({ data, loading, error }) => {
          console.log(data);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :{error}</p>;
          return (
            <>
              <h1 className="text-xl font-bold">Posts List:</h1>
              <ul>
                {data?.map((post) => {
                  return (
                    <li key={post.id}>
                      {post.id}-{post.title}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        }}
      </DataFetcher>

      <DataFetcher url={"https://jsonplaceholder.typicode.com/users?_limit=3"}>
        {({ data, loading, error }) => {
          console.log(data);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :{error}</p>;
          return (
            <>
              <h1 className="text-xl font-bold">Users List:</h1>
              <ul>
                {data?.map((user) => {
                  return (
                    <li key={user.id}>
                      {user.name}----{user.email}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        }}
      </DataFetcher>
    </div>
  );
};
export default RenderPropsDemo;
