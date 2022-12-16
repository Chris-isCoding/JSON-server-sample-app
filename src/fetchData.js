const fetchData = async (url = '', optionsObj = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw new Error('Please reload the app');
    }
    return null;
  } catch (error) {
    return error.message;
  }
};

export default fetchData;
