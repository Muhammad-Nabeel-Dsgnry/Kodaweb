import { config } from 'dotenv'
import mongodb, { MongoClient } from 'mongodb'

async function handler(req, res) {
    const uri = process.env.CONNECTION_STRING
    const client = MongoClient.connect(`${uri}`)
    const db = (await client).db('kodaweb')

    if (req.method === 'POST') {
        const { name, email, message } = req.body
        if (!name && name.trim() === '' && !email && email.trim() === '' && !message && message.trim() === '') {
            return res.status(422).json({ message: 'Invalid Data' })
        }
        const newInfo = {
            name,
            email,
            message,
            dateTime: new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: true, minute:'2-digit', second:'2-digit'})
        }

        let addNewInfo
        try {
            addNewInfo = await db.collection('contact').insertOne(newInfo)
        } catch (error) {
            return console.log(error)
        }

        return res.status(201).json({ message: 'Contact Info Added.', data: newInfo })
    }
}

export default handler