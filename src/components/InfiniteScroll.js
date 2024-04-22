"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const InfiniteScroll = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && currentPage < pages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage > 1) {
      router.push(`/page${currentPage}`);
    }
  }, [currentPage, router]);

  return (
    <div>
      {pages[currentPage - 1]}
    </div>
  );
};

export default InfiniteScroll;