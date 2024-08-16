import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
const carData = [
    {
        title: "Citroen C3 and C3 Aircross benefit from new features",
        author: "Haji Chakralwale",
        time: "6 hours ago",
        description: "Citroen India has updated the C3 and the C3 Aircross with new features.",
        imageUrl: "https://th.bing.com/th/id/OIP.3YnXBQVDRzVC5fe6_H7A2wHaEK?rs=1&pid=ImgDetMain"
    },
    {
        title: "Mahindra Thar Roxx interior revealed in new teaser",
        author: "Jay Shah",
        time: "7 hours ago",
        description: "The interior and features of the Mahindra Thar Roxx have been revealed in new teaser.",
        imageUrl: "https://th.bing.com/th/id/OIP.swCs-HW1mQPViMXgvSjwzQHaEK?rs=1&pid=ImgDetMain"
    },
    {
        title: "Tata Punch sales cross the 4 lakh milestone",
        author: "Jay Shah",
        time: "1 day ago",
        description: "The Tata Punch has received 4 lakh sales milestone in 34 months.",
        imageUrl: "https://imgd.aeplcdn.com/0x0/n/cw/ec/39015/punch-exterior-right-front-three-quarter-2.jpeg?isig=0"
    },
    {
        title: "Hyundai Grand i10 Nios Hy-CNG Duo launched at Rs. 7.75 lakh",
        author: "Haji Chakralwale",
        time: "4 days ago",
        description: "Hyundai India has launched the Grand i10 Nios Hy-CNG Duo at a starting price of Rs. 7.75 lakh (ex-showroom).",
        imageUrl: "https://th.bing.com/th/id/OIP.tvjhs1HgRjyDG4Voj9MuzwHaF7?w=1000&h=800&rs=1&pid=ImgDetMain"
    },
    {
        title: "Hyundai Venue S(O)+ variant launched; priced at Rs. 10 lakh",
        author: "Jay Shah",
        time: "4 days ago",
        description: "The Hyundai Venue gets a new affordable variant with an electric sunroof.",
        imageUrl: "https://th.bing.com/th/id/OIP.A6BC5o5FjKEpdbs5VuuKQQHaEy?rs=1&pid=ImgDetMain"
    },
    {
        title: "Nissan X-Trail launched in India; priced at Rs. 49.92 lakh",
        author: "Jay Shah",
        time: "5 days ago",
        description: "The Nissan X-Trail has been launched in India with an ex-showroom price of Rs. 49.92 lakh (ex-showroom).",
        imageUrl: "https://th.bing.com/th/id/OIP.QN6lvpz6-bijdGSqTUbQDgHaE8?w=1422&h=948&rs=1&pid=ImgDetMain"
    },
    {
        title: "Skoda's new compact SUV name to be revealed soon",
        author: "Haji Chakralwale",
        time: "5 days ago",
        description: "Skoda India is all set to reveal the name of its upcoming compact SUV on 21 August, 2024.",
        imageUrl: "https://th.bing.com/th/id/OIP.KiKUwiuJPERu2vdrwZwObwHaE8?w=1200&h=800&rs=1&pid=ImgDetMain"
    },
    {
        title: "Maruti Ertiga and Renault Triber updated GNCAP results revealed",
        author: "Aditya Nadkarni",
        time: "6 days ago",
        description: "The made-in-India Maruti Ertiga and Renault Triber were tested as per the updated GNCAP norms.",
        imageUrl: "https://th.bing.com/th/id/OIP.R9OCT7SdLsWeycVHcwHyuQHaEL?rs=1&pid=ImgDetMain"
    },
    {
        title: "Tata Curvv features, specifications, and colour details leaked",
        author: "Jay Shah",
        time: "6 days ago",
        description: "Ahead of the official launch of the Tata Curvv on 7 August, the engine detail, colours, and features have been leaked.",
        imageUrl: "https://th.bing.com/th/id/OIP.0PydE38OMybFsMcdQjaIAQHaE8?rs=1&pid=ImgDetMain"
    },
    {
        title: "Maruti Grand Vitara races past 2 lakh unit sales milestone",
        author: "Aditya Nadkarni",
        time: "7 days ago",
        description: "According to the carmaker, the model has a market share of 12 per cent in Q1 FY24.",
        imageUrl: "https://media.zigcdn.com/media/reels/2022/Oct/831431377-zw-gv-base-vrt-sigma-lead.jpg"
    },
    {
        title: "New Hyundai Creta surpasses 1 lakh unit sales milestone in six months",
        author: "Aditya Nadkarni",
        time: "7 days ago",
        description: "The company continues to sell 550 units of the mid-size SUV each day.",
        imageUrl: "https://th.bing.com/th/id/OIP.roOcPgVPYXrysAHpU7wIKAHaEk?rs=1&pid=ImgDetMain"
    },
]

const News = () => {
    return (
        <>
            <Navbar />
            <div className="car-list">
                {carData.map((car, index) => (
                    <div key={index} className="car-item">
                        <img src={car.imageUrl} alt={car.title} className="car-image" />
                        <div className="car-details">
                            <h2>{car.title}</h2>
                            <h6>{car.author} - {car.time}</h6>
                            <p>{car.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default News;
