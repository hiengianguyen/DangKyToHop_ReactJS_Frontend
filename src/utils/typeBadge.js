export default function typeBadge(status) {
  let result, color;
  switch (status) {
    case "approved":
      result = "Đã phê duyệt";
      color = "success";
      break;
    case "rejected":
      result = "Không phê duyệt";
      color = "danger";
      break;
    default:
      result = "Đã nộp";
      color = "secondary";
      break;
  }
  return {
    title: result,
    color: color
  };
}
