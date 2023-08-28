export const addItem = (key: string, value: any) => {
  if (key) localStorage.setItem(key, value);
};

export const clearItem = (key: string) => {
  localStorage.removeItem(key);
};

export const getItem = (key: string) => {
  return localStorage.getItem(key);
};


