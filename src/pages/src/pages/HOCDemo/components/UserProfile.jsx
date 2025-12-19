import withLoading from "../../../../../hoc/withLoading";
import { useGetCurrentUserQuery } from "../../../../../services/auth";

const UserProfile = withLoading(() => {
  const { currentData } = useGetCurrentUserQuery();
  if (!currentData) {
    return (
      <div className="p-4">
        <h1 className="font-bold text-xl">Thông tin user</h1>
        <p>Không thể lấy thông tin người dùng. Vui lòng thử lại sau.</p>
      </div>
    );
  }
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">Thông tin user</h1>
      <ul>
        <li>
          <strong>Họ tên:</strong> {currentData.lastName}
          {currentData.firstName}
        </li>
        <li>
          <strong>Email:</strong> {currentData.email}
        </li>
        <li>
          <strong>username:</strong> {currentData.username}
        </li>
      </ul>
    </div>
  );
});

export default UserProfile;
