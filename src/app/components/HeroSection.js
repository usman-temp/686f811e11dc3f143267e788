/* eslint-disable */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="px-6 py-20 text-center bg-orange-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6">
          Welcome to Culinary Canvas
        </h1>
        <p className="text-lg md:text-xl text-amber-700 mb-10">
          Discover, cook, and share the art of delicious recipes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#recipes" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md transition">
            Explore Recipes
          </Link>
          <Link href="#videos" className="bg-white border border-amber-500 text-amber-700 px-6 py-3 rounded-md hover:bg-amber-100 transition">
            Watch Video
          </Link>
          <Link href="#submit" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-md transition">
            Submit Your Recipe
          </Link>
        </div>
      </motion.div>
    </section>
  );
}