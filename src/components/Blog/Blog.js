// Blog.js
import React, { useState } from 'react';
import ShowContent from './ShowContent';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'React.js', 'JavaScript', 'CSS', 'Tips & Tricks', 'Career'];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Latest <span className="text-blue-600 dark:text-blue-400">Blog</span> Posts
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Sharing knowledge, insights, and experiences from my journey in web development
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Content */}
                <ShowContent activeCategory={activeCategory} />
            </div>
        </section>
    );
};

export default Blog;