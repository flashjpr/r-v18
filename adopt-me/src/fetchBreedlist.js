const fetchBreedlist = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];

  const apiResponse = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!apiResponse.ok) {
    throw new Error(
      `animal/${animal} fetch failed; status: ${apiResponse.status}`,
    );
  }
  return apiResponse.json();
};

export default fetchBreedlist;
