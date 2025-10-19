function NonDataImg({ title = "Không có dữ liệu", message = "Hiệi tại chưa có học sinh trong hàng đợi" }) {
  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <img className="size-40 mb-4" src="/empty.png" alt="" style={{ pointerEvents: "none", userSelect: "none" }} />
      <div className="d-flex gap-3 text-center flex-column">
        <h3 className="fs-2 fw-bolder text-gray-600">{title}</h3>
        <i className="">{message}</i>
      </div>
    </div>
  );
}

export default NonDataImg;
