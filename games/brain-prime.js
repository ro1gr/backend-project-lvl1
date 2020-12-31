export default (number) => {
  if (number === 0 || number === 1) {
    return 'no';
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
