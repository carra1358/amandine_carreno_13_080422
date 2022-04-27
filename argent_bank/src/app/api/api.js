/**
 *  function that return an object centrelazing requests used in the project
 *  take a axios instance as a parameter
 * @param {InstanceType} client
 * @returns {object} api{login,editName,accessData}
 */
const api = (client) => ({

    login: async (email, password) => client.post("user/login", { email, password }),
    editName: async (firstName, lastName) => client.put("user/profile", { firstName, lastName }),
    accessData: async (url) => client.post(url)
})

export default api;