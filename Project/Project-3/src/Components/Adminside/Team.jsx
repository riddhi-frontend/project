import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Footer from './Footer';

const teamMembers = [
    { name: 'Jane Smith', role: 'CTO', imageUrl: 'https://th.bing.com/th/id/OIP.8UqOTLl0knNXrmb8iSs8KwHaHw?rs=1&pid=ImgDetMain' },
    { name: 'Michael Brown', role: 'CFO', imageUrl: 'https://th.bing.com/th/id/OIP.2KMGWz0bwBQTo77--cse9AAAAA?w=474&h=474&rs=1&pid=ImgDetMain' },
    { name: 'Emily Johnson', role: 'COO', imageUrl: 'https://th.bing.com/th/id/OIP.xJjel5WIIOkSvvl_Yl_u3QAAAA?w=369&h=369&rs=1&pid=ImgDetMain' },
    { name: 'Chris Davis', role: 'CMO', imageUrl: 'https://th.bing.com/th/id/OIP.vqdR0JbQlzMkvLTX3hLENgHaHa?w=808&h=808&rs=1&pid=ImgDetMain' },
    { name: 'Sarah Wilson', role: 'CSO', imageUrl: 'https://th.bing.com/th/id/OIP.ApOqkwdaf1Oac22BNfm_cwHaHa?w=700&h=700&rs=1&pid=ImgDetMain' },
    { name: 'David Martinez', role: 'CIO', imageUrl: 'https://th.bing.com/th/id/OIP.hjaIh1DJTFrVageNeaok-wHaHy?w=840&h=884&rs=1&pid=ImgDetMain' },
    { name: 'Laura Thompson', role: 'CDO', imageUrl: 'https://th.bing.com/th/id/OIP.iVee6M8sZnB0BWmBZu7gzAAAAA?w=300&h=300&rs=1&pid=ImgDetMain' },
];

const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed:2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
        <Navbar/>
        <section className="team container">
            <h2>Our Team</h2>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member-wrapper">
                        <div className="team-member">
                        <img src={member.imageUrl} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                    </div>
                ))}
            </Slider>
        </section>
        <Footer/>
        </>
    );
};

export default Team;
