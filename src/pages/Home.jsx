import { Link } from "react-router";
import { useGetCurrentUserQuery } from "../services/auth";

const Home = () => {
  const { data, isSuccess } = useGetCurrentUserQuery();

  const userInfo = useGetCurrentUserQuery();
  console.log(userInfo);
  return (
    <>
      <div className="p-4">
        {isSuccess && (
          <h1 className="text-2xl text-blue-400 font-bold">
            Hi! {data.firstName}
          </h1>
        )}
      </div>
    </>
  );
};
export default Home;
