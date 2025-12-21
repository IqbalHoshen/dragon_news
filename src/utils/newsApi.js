export const newsApi = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    e.error("API Error:", error);
    throw error;
  }
};
