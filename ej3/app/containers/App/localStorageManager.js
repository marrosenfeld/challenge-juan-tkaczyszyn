

export const saveData = (key, payload) => {
  console.log("saveData",key, payload)
  localStorage.setItem(key, JSON.stringify(payload));
}

export const getData = (key) => {
  const retrievedObject = localStorage.getItem(key) || null;
  return JSON.parse(retrievedObject)
}
