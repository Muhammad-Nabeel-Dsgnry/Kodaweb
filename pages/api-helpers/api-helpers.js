import axios from "axios";
import Swal from "sweetalert2";

export const contactApiHandelr = async (data) => {
    const res = await axios.post('/api/contact', {
        name: data.name,
        email: data.email,
        message: data.message
    })
    .catch(err => console.log(err))

    if(res.status !== 201) {
        return console.log('Unexpected Error')
    }
    else {
        Swal.fire({
            icon: 'success',
            iconColor: '#2C35CD',
            title: `Hello ${data.name}`,
            html: `Thank you for contacting us. One of our erpresentative will be contact you soon.`,
            color: '#000',
            showConfirmButton: false,
            timer: 5000
        })
    }

    const resData = await res.data
    return resData
}

export const quoteApiHelper = async (data, phoneNumber) => {
    const res = await axios.post('/api/quote', {
        name: data.name,
        email: data.email,
        phoneNumber: phoneNumber,
        industry: data.industry,
        message: data.message
    })
    .catch(err => console.log(err))

    if(res.status !== 201) {
        return console.log('Unexpected Error')
    }
    else {
        Swal.fire({
            icon: 'success',
            iconColor: '#2C35CD',
            title: `Hello ${data.name}`,
            html: 'Thank you for contacting us. One of our representative will be contact you soon.',
            color: '#000',
            showConfirmButton: false,
            timer: 5000
        })
    }

    const resData = await res.data
    return resData
}