// ShowContent.js
import React from 'react';

const ShowContent = ({ activeCategory }) => {
    const blogPosts = [
        {
            id: 1,
            title: "Mastering React Hooks in 2024",
            excerpt: "Learn how to effectively use React Hooks to build modern, efficient React applications with best practices and real-world examples.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "React.js",
            date: "Dec 15, 2024",
            readTime: "8 min read",
            author: "Epshita Shima",
            tags: ["React", "Hooks", "JavaScript", "Frontend"]
        },
        {
            id: 2,
            title: "Tailwind CSS vs Bootstrap: Which One to Choose?",
            excerpt: "A comprehensive comparison between Tailwind CSS and Bootstrap to help you decide which CSS framework is right for your next project.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "CSS",
            date: "Dec 10, 2024",
            readTime: "6 min read",
            author: "Epshita Shima",
            tags: ["Tailwind", "Bootstrap", "CSS", "Frameworks"]
        },
        {
            id: 3,
            title: "Building Scalable Node.js Applications",
            excerpt: "Essential patterns and practices for building scalable and maintainable Node.js applications in production environments.",
            image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "Web Development",
            date: "Dec 5, 2024",
            readTime: "10 min read",
            author: "Epshita Shima",
            tags: ["Node.js", "Backend", "Scalability", "Architecture"]
        },
        {
            id: 4,
            title: "JavaScript ES2024 Features You Should Know",
            excerpt: "Explore the latest JavaScript features and syntax improvements that will make your code cleaner and more efficient.",
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "JavaScript",
            date: "Nov 28, 2024",
            readTime: "7 min read",
            author: "Epshita Shima",
            tags: ["JavaScript", "ES6", "Modern JS", "Web Development"]
        },
        {
            id: 5,
            title: "Career Tips for Junior Developers",
            excerpt: "Practical advice and strategies for junior developers to accelerate their career growth and stand out in the tech industry.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "Career",
            date: "Nov 20, 2024",
            readTime: "9 min read",
            author: "Epshita Shima",
            tags: ["Career", "Development", "Tips", "Growth"]
        },
        {
            id: 6,
            title: "Performance Optimization for React Apps",
            excerpt: "Advanced techniques and tools to optimize the performance of your React applications for better user experience.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "React.js",
            date: "Nov 15, 2024",
            readTime: "11 min read",
            author: "Epshita Shima",
            tags: ["Performance", "React", "Optimization", "Web Vitals"]
        }
    ];

    const filteredPosts = activeCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory);

    const categoriesList = [
        { name: 'Web Development', count: 12 },
        { name: 'React.js', count: 8 },
        { name: 'JavaScript', count: 15 },
        { name: 'CSS', count: 7 },
        { name: 'Tips & Tricks', count: 9 },
        { name: 'Career', count: 5 },
        { name: 'Tools', count: 6 }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Blog Posts */}
                <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Author and Read More */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {post.author}
                                            </span>
                                        </div>
                                        <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center group/read">
                                            Read More
                                            <span className="ml-2 transform group-hover/read:translate-x-1 transition-transform">→</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <div className="flex items-center space-x-2">
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                ←
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg font-medium">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                3
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    {/* Categories */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                            <span className="mr-3">📂</span>
                            Categories
                        </h3>
                        <ul className="space-y-3">
                            {categoriesList.map((cat, index) => (
                                <li key={index}>
                                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium">
                                            {cat.name}
                                        </span>
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                                            {cat.count}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Posts */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                            <span className="mr-3">🔥</span>
                            Popular Posts
                        </h3>
                        <div className="space-y-4">
                            {blogPosts.slice(0, 3).map((post) => (
                                <div key={post.id} className="flex items-center group">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-16 h-16 object-cover rounded-lg mr-4"
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {post.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-3">📧 Stay Updated</h3>
                        <p className="text-blue-100 mb-4">
                            Subscribe to get the latest blog posts and tech insights
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-blue-200 text-white border border-white/30 focus:outline-none focus:border-white"
                            />
                            <button className="w-full px-4 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowContent;