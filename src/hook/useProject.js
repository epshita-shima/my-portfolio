// import React, { useEffect, useState } from 'react';

// const useProject = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         fetch('https://boiling-hollows-61344.herokuapp.com/projects')
//             .then(res => res.json())
//             .then(data => setProjects(data))
//     }, [])

//     return [projects];
// };

// export default useProject;

// hook/useProject.js
import { useState, useEffect } from 'react';

const useProject = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Dummy projects data
        const dummyProjects = [
            {
                _id: '1',
                name: 'E-Commerce Platform',
                description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
                img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-ecommerce.com',
                github: 'https://github.com/username/ecommerce',
                details1: 'React.js',
                details2: 'Node.js',
                details3: 'MongoDB',
                details4: 'Stripe API',
                features: [
                    'User authentication & authorization',
                    'Product catalog with filters',
                    'Shopping cart functionality',
                    'Payment gateway integration',
                    'Admin dashboard',
                    'Order management system'
                ],
                technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe']
            },
            {
                _id: '2',
                name: 'Task Management App',
                description: 'A productivity application for managing daily tasks with drag & drop functionality, team collaboration, and real-time updates.',
                img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-taskapp.com',
                github: 'https://github.com/username/taskapp',
                details1: 'React.js',
                details2: 'Firebase',
                details3: 'Tailwind',
                details4: 'Context API',
                features: [
                    'Drag & drop interface',
                    'Real-time collaboration',
                    'Task categorization',
                    'Progress tracking',
                    'Team management',
                    'Notifications'
                ],
                technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API', 'React DnD']
            },
            {
                _id: '3',
                name: 'Portfolio Website',
                description: 'A responsive portfolio website showcasing projects, skills, and experience with modern design and animations.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-portfolio.com',
                github: 'https://github.com/username/portfolio',
                details1: 'Next.js',
                details2: 'Tailwind',
                details3: 'Framer',
                details4: 'GSAP',
                features: [
                    'Responsive design',
                    'Dark/Light mode',
                    'Smooth animations',
                    'Project showcase',
                    'Contact form',
                    'Blog section'
                ],
                technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'MDX']
            },
            {
                _id: '4',
                name: 'Weather Dashboard',
                description: 'A weather application providing real-time weather data, forecasts, and location-based weather information.',
                img: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-weather.com',
                github: 'https://github.com/username/weather-app',
                details1: 'React.js',
                details2: 'API',
                details3: 'Chart.js',
                details4: 'Geolocation',
                features: [
                    'Real-time weather data',
                    '5-day forecast',
                    'Location detection',
                    'Weather charts',
                    'Search functionality',
                    'Responsive design'
                ],
                technologies: ['React', 'OpenWeather API', 'Chart.js', 'Axios', 'Geolocation API']
            },
            {
                _id: '5',
                name: 'Social Media Dashboard',
                description: 'A dashboard for managing social media accounts with analytics, scheduling, and content management features.',
                img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-socialdashboard.com',
                github: 'https://github.com/username/social-dashboard',
                details1: 'React.js',
                details2: 'Node.js',
                details3: 'MySQL',
                details4: 'Chart.js',
                features: [
                    'Multi-platform integration',
                    'Analytics dashboard',
                    'Content scheduling',
                    'User management',
                    'Report generation',
                    'Real-time updates'
                ],
                technologies: ['React', 'Node.js', 'MySQL', 'Chart.js', 'Socket.io', 'JWT']
            },
            {
                _id: '6',
                name: 'Recipe Finder App',
                description: 'A recipe discovery application with search, filtering, ingredient management, and cooking instructions.',
                img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                live: 'https://example-recipes.com',
                github: 'https://github.com/username/recipe-app',
                details1: 'React.js',
                details2: 'API',
                details3: 'Firebase',
                details4: 'PWA',
                features: [
                    'Recipe search & filter',
                    'Ingredient management',
                    'Shopping list',
                    'Favorite recipes',
                    'Offline access',
                    'User accounts'
                ],
                technologies: ['React', 'Spoonacular API', 'Firebase', 'PWA', 'Redux']
            }
        ];

        // Simulate API call delay
        setTimeout(() => {
            setProjects(dummyProjects);
            setLoading(false);
        }, 1000);
    }, []);

    return [projects, loading];
};

export default useProject;