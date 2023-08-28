
const DomainURL = 'http://localhost:5005/api';


export const Post = async (URL: string, params: any) => {
  let response = await fetch(`${DomainURL}${URL}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });

  return await response;
};