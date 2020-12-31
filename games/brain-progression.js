export default (str) => {
  const arr = str.split(' ');
  const isHidden = (element) => element === '..';
  const indexOfHiddenEl = arr.findIndex(isHidden);
  const step = (arr[indexOfHiddenEl + 1] - arr[indexOfHiddenEl - 1]) / 2;
  return String(Number(arr[indexOfHiddenEl - 1]) + step);
};
