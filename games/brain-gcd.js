export default (question) => {
  const arr = question.split(' ');
  const n1 = arr[0];
  const n2 = arr[1];
  const greatest = n1 > n2 ? n1 : n2;
  const least = n1 > n2 ? n2 : n1;

  const getGcd = (big, small) => {
    if (big % small === 0) {
      return small;
    }
    return getGcd(small, big % small);
  };

  return getGcd(greatest, least);
};
