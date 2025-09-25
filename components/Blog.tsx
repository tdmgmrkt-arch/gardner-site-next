"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  User,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import React, { useState, useMemo, useEffect } from "react";
import { posts as allBlogPosts, Post } from "@/data/blogPosts";

export function Blog() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const postsPerPage = 9;

  const categories = ["All", ...new Set(allBlogPosts.map((post) => post.category))];
  const midPoint = Math.ceil(categories.length / 2);
  const topRowCategories = categories.slice(0, midPoint);
  const bottomRowCategories = categories.slice(midPoint);

  const filteredPosts = useMemo(() => {
    return allBlogPosts
      .filter((post) =>
        selectedCategory === "All" ? true : post.category === selectedCategory
      )
      .filter((post) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.excerpt.toLowerCase().includes(lowerSearchTerm)
        );
      });
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <BookOpen className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Gardner Plumbing Blog
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Expert Insights &{" "}
              <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Plumbing Tips
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your trusted resource for plumbing advice, maintenance tips, and the
              latest in home water management from the experts at Gardner Plumbing Co.
            </p>
          </div>

          {/* Search + Filters */}
          <div
            className="mb-16 p-6 bg-gray-800/20 border border-white/10 rounded-2xl shadow-lg animate-fade-in space-y-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search articles by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base bg-gray-900/50 border-2 border-gray-700 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500/50 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              {[topRowCategories, bottomRowCategories].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center bg-black/20 p-1 rounded-xl border border-gray-700/50"
                >
                  {row.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex-1 text-center px-3 py-2 text-sm font-semibold rounded-lg transition-all truncate 
                        ${index < row.length - 1 ? "border-r border-gray-700" : ""} 
                        ${
                          selectedCategory === category
                            ? "bg-red-600 text-white shadow-md"
                            : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post: Post, index: number) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 h-full flex flex-col"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                  <div className="relative z-10 overflow-hidden flex flex-col flex-grow">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-red-400/30">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                          <span className="text-white text-xs font-medium">{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <User className="h-3 w-3 text-blue-400" />
                        <span>{post.author}</span>
                        <span className="text-gray-600">•</span>
                        <Calendar className="h-3 w-3 text-blue-400" />
                        <span>{post.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-red-300 transition-colors duration-300 flex-grow">
                        {post.title}
                      </h4>
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl rounded-xl py-3 mt-auto text-sm group/btn">
                        <span className="flex items-center justify-center gap-2">
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              <Button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-800/50 hover:bg-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-red-500/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <Button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-red-600 text-white border-red-400"
                      : "bg-gray-800/50 hover:bg-red-500/50"
                  } border border-red-500/30`}
                >
                  {number}
                </Button>
              ))}
              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-800/50 hover:bg-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-red-500/30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
