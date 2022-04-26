const api = (client) => ({

       login : async (email,password) => client.post("user/login",{email,password}),
       editName : async(firstName,lastName) => client.put("user/profile",{firstName,lastName}),
       accessData: async(url) => client.post(url)
})

export default api;