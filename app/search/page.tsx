'use client'
import { useState } from 'react'
import { flashcards } from '@/data/flashcards'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Pagination } from "@nextui-org/react"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<typeof flashcards>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    const results = flashcards.filter(card =>
      card.chinese.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.vietnamese.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
    setCurrentPage(1) // Reset về trang 1 khi có kết quả tìm kiếm mới
  }

  // Tính toán các items cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(searchResults.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Tra cứu</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nhập từ cần tra cứu..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#689F38]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
      </div>

      <button
        className="bg-[#689F38] text-white px-6 py-2 rounded-full hover:bg-[#588d2a]"
        onClick={handleSearch}
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.15 }}
        >Tìm kiếm</motion.p>
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-10"
      >
        {currentItems.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.image}
                alt={card.chinese}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{card.chinese}</h2>
              <p className="text-gray-600">{card.pinyin}</p>
              <p className="text-gray-800 mt-2">{card.vietnamese}</p>
              <button className="mt-4 bg-[#689F38] text-white px-4 py-2 rounded-full hover:bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Listen
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {searchResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center my-8"
        >
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showControls
            color="success"
            variant="faded"
            classNames={{
              wrapper: "gap-2",
              cursor: "bg-[#689F38] text-white"
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

