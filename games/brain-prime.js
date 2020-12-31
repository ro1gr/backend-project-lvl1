export default (n) => {
  if (n === 0 || n === 1) {
    return 'no';
  }
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
