const getData = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then(
      (result) => result,
      (error) => {
        throw new Error(error);
      }
    );

module.exports = {
  getData,
};
