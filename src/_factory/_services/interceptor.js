export const handleResponse = (response) => {
  return response
    .text()
    .then((text) => {
      const data = text && JSON.parse(text);
      //  console.log(response);
      if (!response.ok) {
        const error = data && data.message ? data.message : "Error Occured";
        return Promise.reject(error);
      }
      return data;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};
