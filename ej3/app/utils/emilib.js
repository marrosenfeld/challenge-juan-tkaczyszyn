// Emi library



// searches the key in a dict. eg: 'a.b.c' in myObj
// returns myObj.a.b.c
const getFromKey = (dicObject, key) => {
  return key.split('.').reduce((p,c)=>p&&p[c]||null, dicObject)
}

export {
  getFromKey,
};
