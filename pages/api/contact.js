import mongodb, { MongoClient } from 'mongodb'

async function handler(req, res) {
    const client = MongoClient.connect('mongodb+srv://kodaweb:kodaweb1234@cluster0.tfhba9o.mongodb.net/?retryWrites=true&w=majority')
    const db = (await client).db('kodaweb')

    if (req.method === 'POST') {
        const { name, email, message } = req.body
        if (!name && name.trim() === '' && !email && email.trim() === '' && !message && message.trim() === '') {
            return res.status(422).json({ message: 'Invalid Data' })
        }
        const newInfo = {
            name,
            email,
            message
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

// mongodb+srv://kodaweb:<password>@cluster0.tfhba9o.mongodb.net/?retryWrites=true&w=majority