const withLoading = (WrappedComponent) => {
  const WithLoading = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <p>Đang tải...</p>;
    }
    return <WrappedComponent {...props} />;
  };
  WithLoading.displayName = WrappedComponent.displayName;
  return WithLoading;
};
export default withLoading;
