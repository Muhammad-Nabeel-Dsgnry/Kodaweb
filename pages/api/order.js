// import mongodb, {MongoClient} from 'mongodb'
// import { config } from 'dotenv'

// async function handler(req, res) {

//     const uri = process.env.CONNECTION_STRING
//     const client = MongoClient.connect(`${uri}`)
//     const db = (await client).db('kodaweb')

//     if(req.method === 'POST') {
//         const {businessName, businessSlogan, industry, logoType, productDescription, competitor, communicate, contentPages, primaryColor, secondaryColor, ascendColor, name, email, phoneNumber, message, isSelect} = req.body

//         if (!businessName && businessName.trim() === '' && !businessSlogan && businessSlogan.trim() === '' &&!industry && industry.trim() === '' && !productDescription && productDescription.trim() === '' ) {
//             return res.status(422).json({message: 'Invalid Data'})
//         }
    
//         const newOrder = {
//             businessName,
//             businessSlogan,
//             industry,
//             logoType,
//             productDescription,
//             competitor,
//             communicate,
//             contentPages,
//             colors: [primaryColor, secondaryColor, ascendColor],
//             name,
//             email,
//             phoneNumber,
//             message,
//             paymentMethod: isSelect,
//             dateTime: new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: true, minute:'2-digit', second:'2-digit'})
//         }
    
//         let projectOrder
//         try {
//             projectOrder = await db.collection('orders').insertOne(newOrder)
//         } catch (error) {
//             console.log(error)
//         }
    
//         return res.status(201).json({message: 'New Order placed.', data: newOrder})
//     }


// }

// export default handler