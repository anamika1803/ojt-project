// About.jsx

import React, { useEffect } from 'react';
import '../Pages/About.css'; // Importing CSS file for styling

import image1 from '../assets/mind.png'; // Importing image files
import image2 from '../assets/mba.jpg';
import image3 from '../assets/mbat.jpg';

function About() {
  useEffect(() => {
    // Add 'animated' class to paragraphs after component mounts
    const paragraphs = document.querySelectorAll('.about-page p');
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add('animated');
    });
  }, []);

  return (
    <div className="about-page">
      <div className="top-image">
        <img src={image1} alt="Top Image" />
      </div>
      <div className="split-content">
        <div className="left-content">
          <img src={image2} alt="Second Image" />
        </div>
        <div className="right-content">
          <h2>About Us</h2>
          <p>
          Those who venture here—to learn, research, teach, work, 
          and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world.
          we are dedicated to providing exceptional educational opportunities for learners of all ages and backgrounds. With a
           rich history of academic excellence and a forward-thinking approach to teaching and learning, we strive to inspire and
            empower individuals to reach their highest potential. Our diverse faculty brings a wealth of expertise and passion to the classroom, 
            fostering an environment where creativity, critical thinking, and collaboration thrive. Whether you're seeking to advance your career,
             pursue a personal passion, or simply expand your horizons, [Academy Name] offers a wide range of courses and programs tailored to meet
              your needs. At the heart of everything we do is a commitment to excellence, integrity, and inclusivity, ensuring that every student 
              receives the support and resources they need to succeed. Join us as we embark on a journey of discovery, 
          innovation, and lifelong learning together
          </p>
          {/* Add more content here */}
        </div>
      </div>
      <div className="split-content">
        <div className="left-content">
          <h2>About Our Mission</h2>
          <p>
          our mission is to provide exceptional education that empowers individuals to realize their 
          full potential and make meaningful contributions to society. Rooted in a commitment to excellence, 
          integrity, and inclusivity, we offer a diverse range of courses and programs designed to meet the needs 
          of learners from all backgrounds. Through innovative teaching methods, personalized support, and a vibrant learning community, 
          we strive to inspire curiosity, foster critical thinking, and instill a lifelong love of learning. We are dedicated to continuous improvement, embracing emerging technologies and pedagogical approaches to ensure that our educational offerings remain relevant and impactful. By nurturing a culture of collaboration, creativity, and global citizenship, we aim to equip our students with the knowledge, skills, and mindset needed to thrive in an ever-changing world. Join us on a journey of discovery, growth, 
          and transformation as we work together to shape a brighter future for individuals and communities worldwide.
          </p>
          {/* Add more content here */}
        </div>
        <div className="right-content">
          <img src={image3} alt="Third Image" />
        </div>
      </div>
      <footer className="mt-auto bg-gray-000 dark:bg-gray-900 py-4 text-center">
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
