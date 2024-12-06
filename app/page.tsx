'use client'

import { Suspense } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { flashcards } from '@/data/flashcards'
import { useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Pagination } from "@nextui-org/react"
import { LockClosedIcon } from '@heroicons/react/24/solid';

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quoteRef = useRef<HTMLDivElement>(null)
  const upgradeButtonsRef = useRef<HTMLDivElement>(null)

  const initialPage = Number(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(initialPage)
  const itemsPerPage = 12

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = flashcards.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(flashcards.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber === 1) {
      setCurrentPage(pageNumber)
      router.replace(`?page=${pageNumber}`, { scroll: false })
      quoteRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      utterance.pitch = 1;

      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Browser does not support Speech API');
    }
  };

  const scrollToUpgradeButtons = () => {
    upgradeButtonsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col-span-1 xl:col-span-2 relative bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-[#689F38] text-2xl font-bold mb-6 mt-6">Ưu Đãi Đặc Biệt</h2>
          <div className="container mx-auto flex flex-col items-center gap-6 xl:gap-10">
            <div className="w-full">
              <Image
                src="/discount.jpg"
                alt="Special Offer"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full text-black">
              <h1 className="text-2xl xl:text-3xl font-bold mb-4">Đăng Ký Sớm - Giảm 10%</h1>
              <p className="mb-4 text-sm xl:text-base text-gray-700">
                Đừng bỏ lỡ cơ hội nhận ưu đãi đặc biệt khi đăng ký sớm các khóa học hè. Giảm ngay 10% cho tất cả các khóa học khi đăng ký trước ngày 30/6. Hãy nhanh tay để không bỏ lỡ!
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6 xl:p-8 relative overflow-hidden">
          {/* Badge giảm giá */}
          <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-bl-lg font-bold transform rotate-0">
            30-50% OFF
          </div>

          <h2 className="text-[#689F38] text-2xl font-bold mb-6 mt-6">Black Friday Sắp Đến!</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Siêu Ưu Đãi Học Tiếng Trung</h3>
            <div className="space-y-2">
              <p className="text-base text-gray-700 flex items-center">
                <span className="text-red-600 mr-2">✨</span>
                Giảm tới 50% khóa học Pro
              </p>
              <p className="text-base text-gray-700 flex items-center">
                <span className="text-red-600 mr-2">✨</span>
                Giảm 30% tất cả khóa học HSK
              </p>
              <p className="text-base text-gray-700 flex items-center">
                <span className="text-red-600 mr-2">✨</span>
                Tặng thêm 3 tháng học miễn phí
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-600 mb-4">
            🕒 Chỉ từ 15/12 đến 31/12/2024
          </p>

          <div className="bg-yellow-50 p-3 rounded-lg text-sm text-gray-700">
            <span className="font-bold">Lưu ý:</span> Số lượng ưu đãi có hạn. Đăng ký ngay để được nhắc nhở khi chương trình bắt đầu!
          </div>
        </div>
      </div>
      <motion.div
        ref={quoteRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-italic text-center mb-8 text-gray-700 mt-10"
      >
        &ldquo;学习一门新语言就像打开一扇新世界的大门&rdquo; <br />
        &ldquo;Học một ngôn ngữ mới giống như mở ra một cánh cửa đến một thế giới mới&rdquo;
      </motion.div>
      <h1 className="text-2xl font-bold mb-6 mt-6">Từ vựng Bài 1</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {currentItems.map((card, index) => {
          const isLocked = index >= 4
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
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
                <button
                  onClick={() => speak(card.chinese)}
                  className="mt-4 bg-[#689F38] text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Listen
                </button>
              </div>
              {isLocked && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 rounded-lg cursor-pointer"
                  onClick={scrollToUpgradeButtons}
                >
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    <LockClosedIcon className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
      <div ref={upgradeButtonsRef}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-12">
          <button
            className="px-8 py-3 bg-[#689F38] text-white rounded-full hover:bg-green-600 transition-colors duration-200 text-lg font-semibold"
            onClick={() => router.push('/trial')}
          >
            Học thử miễn phí
          </button>
          <button
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
            onClick={() => router.push('/register')}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          showControls
          isDisabled={true}
          color="success"
          variant="faded"
          classNames={{
            wrapper: "gap-2",
            cursor: "bg-[#689F38] text-white",
            item: currentPage !== 1 ? "opacity-50 cursor-not-allowed" : ""
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
