import mongo, {MongoClient} from 'mongodb'
import { config } from 'dotenv'

async function handler(req, res) {
    const uri = process.env.CONNECTION_STRING
    const client = MongoClient.connect(`${uri}`)
    const db = (await client).db('kodaweb')

    if(req.method === 'POST') {
        const {name, email, phoneNumber, industry, message} = req.body
        if(!name && name.trim() === '' && !email && email.trim() === '' && !phoneNumber && phoneNumber.trim() === '' && !industry && industry.trim() === '' && !message && message.trim() === '') {
            res.status(422).json({message: 'Invalid Data'})
        }

        const newQuote = {
            name,
            email,
            phoneNumber,
            industry,
            message,
            dateTime: new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: true, minute:'2-digit', second:'2-digit'})
        }
        let Quote
        try {
            Quote = await db.collection('quote').insertOne(newQuote)
        } catch (error) {
            return console.log(error)
        }

        return res.status(201).json({ message: 'Quote request send successfully', data: newQuote })
    }
}

export default handler