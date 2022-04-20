 
 const transactionData = [
    
       {
          "type":"checking",
          "id":"12345567890",
          "userId":"u9307u14983z5019834",
          "balance":3500,
          "operations":[
             {
                "operationType":"electronic",
                "description":"King Kebab",
                "date":"20022-09-12",
                "category":"food",
                "notes":"",
                "amount":-7,
                "rejected":false
             },
             {
                "operationType":"transfert",
                "description":"Vodaphone",
                "date":"20022-01-12",
                "category":"bill",
                "notes":"",
                "amount":-80,
                "rejected":false
             },
             {
                "operationType":"electronic",
                "description":"Carrefour",
                "date":"20022-01-12",
                "category":"shopping",
                "notes":"",
                "amount":-200,
                "rejected":false
             },
             {
                "operationType":"electronic",
                "description":"Dream car rent",
                "date":"20022-10-12",
                "category":"service",
                "notes":"",
                "amount":-1000,
                "rejected":false
             }
          ]
       },
       {
          "type":"Saving",
          "id":"0987654321",
          "userId":"u9307u14983z5019834",
          "balance":9500,
          "operations":[
             {
                "operationType":"transfert",
                "description":"tony stark",
                "date":"20022-09-12",
                "category":"",
                "notes":"",
                "amount":700,
                "rejected":false
             },
             {
                "operationType":"transfert",
                "description":"loto",
                "date":"20022-01-12",
                "category":"entertainement",
                "notes":"",
                "amount":80,
                "rejected":false
             }
          ]
       },
      {
          "type":"Credit",
          "id":"qwertzuiop",
          "userId":"u9307u14983z5019834",
          "balance":-2000,
          "operations":[
             {
                "operationType":"electronic",
                "description":"Rolex",
                "date":"20022-12-12",
                "category":"shopping",
                "notes":"",
                "amount":2000,
                "rejected":false
             }
          ]
       }
    
 ]

export default transactionData;