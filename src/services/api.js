import client from "http/client";

export const getPlants = async () => {
  return await client.get(`/plants`);
};
