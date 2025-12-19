import withLoading from "../../../hoc/withLoading";

const ProductList = withLoading(() => {
  const Products = ["Laptop", "Điện thoại", "Máy tính bảng"];
  return (
    <div className="p-4 ">
      <h1 className="font-bold text-xl">Danh sách sản phẩm</h1>
      <ul className="pl-4 list-disc">
        {Products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
});
export default ProductList;
