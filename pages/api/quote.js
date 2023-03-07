import mongo, {MongoClient} from 'mongodb'

async function handler(req, res) {
    const client = MongoClient.connect('mongodb+srv://kodaweb:kodaweb1234@cluster0.tfhba9o.mongodb.net/?retryWrites=true&w=majority')
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
            message
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