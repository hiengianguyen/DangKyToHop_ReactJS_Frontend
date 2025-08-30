export default function checkValueInp(data) {
  let error = false;
  const result = {};
  const keys = Object.keys(data);

  for (var key of keys) {
    if (data[key].trim().length === 0) {
      error = true;
      result[key] = true;
    }
  }

  return { error, result };
}
