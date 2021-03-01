const getData = (url) =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });

module.exports = {
  getData,
};
