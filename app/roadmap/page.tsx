'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const roadmapItems = [
  {
    level: 'HSK 1',
    img: '/roadmap/hsk1.png',
    description: 'Học 600 từ vựng và mẫu câu cơ bản để giao tiếp hằng ngày',
    progress: 0,
    total: 26,
    color: 'from-blue-400 to-blue-500',
    details: [
      'Học hệ thống phát âm pinyin',
      'Nắm vững các nét cơ bản trong chữ Hán',
      'Học 150-300 từ vựng thông dụng',
      'Luyện tập các mẫu câu giao tiếp cơ bản',
      'Làm quen với văn hóa Trung Quốc'
    ]
  },
  {
    level: 'HSK 2',
    img: '/roadmap/hsk2.png',
    description: 'Nâng cao từ vựng lên 1200 từ, học ngữ pháp cơ bản',
    progress: 0,
    total: 30,
    color: 'from-green-400 to-green-500',
    details: [
      'Mở rộng vốn từ vựng lên 600-1200 từ',
      'Học các cấu trúc ngữ pháp cơ bản',
      'Luyện đọc hiểu các đoạn văn ngắn',
      'Tập viết các đoạn văn đơn giản',
      'Luyện nghe với các đoạn hội thoại ngắn'
    ]
  },
  {
    level: 'HSK 3',
    img: '/roadmap/hsk3.png',
    description: 'Nâng cao kỹ năng giao tiếp với 2000 từ vựng',
    progress: 0,
    total: 35,
    color: 'from-purple-400 to-purple-500',
    details: [
      'Nâng cao vốn từ vựng lên 2000 từ',
      'Học các cấu trúc ngữ pháp phức tạp',
      'Luyện đọc hiểu các bài báo và văn bản dài',
      'Tập viết các bài luận ngắn',
      'Luyện kỹ năng giao tiếp trong nhiều tình huống'
    ]
  },
  {
    level: 'HSK 4',
    img: '/roadmap/hsk4.png',
    description: 'Phát triển kỹ năng học thuật và chuyên ngành',
    progress: 0,
    total: 40,
    color: 'from-pink-400 to-pink-500',
    details: [
      'Mở rộng vốn từ vựng lên trên 3000 từ',
      'Nắm vững các cấu trúc ngữ pháp phức tạp và thành ngữ',
      'Đọc hiểu và phân tích các tác phẩm văn học',
      'Viết các bài luận học thuật và báo cáo',
      'Phát triển kỹ năng thuyết trình và tranh luận'
    ]
  },
  {
    level: 'HSK 5',
    img: '/roadmap/hsk5.png',
    description: 'Sử dụng tiếng Trung một cách tự nhiên trong môi trường học thuật và công việc',
    progress: 0,
    total: 45,
    color: 'from-orange-400 to-orange-500',
    details: [
      'Học thêm 1300 từ vựng mới (tổng 3350 từ)',
      'Nắm vững các thành ngữ và cụm từ văn chương',
      'Đọc hiểu được các tác phẩm văn học và báo chí',
      'Viết được các bài luận học thuật chi tiết',
      'Có thể tranh luận và thuyết trình chuyên nghiệp'
    ]
  },
  {
    level: 'HSK 6',
    img: '/roadmap/hsk6.png',
    description: 'Đạt trình độ gần như người bản xứ',
    progress: 0,
    total: 50,
    color: 'from-red-400 to-red-500',
    details: [
      'Nắm vững trên 5000 từ vựng',
      'Hiểu và sử dụng thành thạo các thành ngữ, tục ngữ',
      'Đọc hiểu mọi dạng tài liệu tiếng Trung',
      'Viết được các bài luận và báo cáo phức tạp',
      'Giao tiếp trôi chảy như người bản xứ trong mọi tình huống'
    ]
  }
]

export default function Roadmap() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8 text-center">
        <h1 className="text-2xl xl:text-4xl font-bold text-[#689F38] mb-4">
          Khám Phá Hành Trình Chinh Phục Tiếng Trung
        </h1>
        <p className="text-gray-600 text-base xl:text-lg mb-6">
          Bạn đang ở đâu trên con đường trở thành bậc thầy tiếng Trung?
          Hãy cùng khám phá lộ trình từ HSK1 đến HSK6 được thiết kế riêng cho bạn!
        </p>
        <div className="inline-block bg-amber-100 rounded-lg p-4 text-amber-800 mb-6">
          <p className="font-medium">
            💡 Mỗi cấp độ được thiết kế để giúp bạn tiến bộ một cách tự nhiên và hiệu quả.
            Hãy bắt đầu từ HSK1 và từng bước chinh phục đỉnh cao!
          </p>
        </div>
        <Link href="/test-hsk" className="inline-block rounded-lg p-4">
          <motion.button
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-4 shadow-lg transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">🎯</span>
            <div className="text-left">
              <p className="font-bold text-lg">Kiểm tra trình độ HSK của bạn</p>
              <p className="text-sm text-white/90">
                Làm bài test nhanh để biết bạn đang ở cấp độ nào!
              </p>
            </div>
          </motion.button>
        </Link>
      </div>
      <div className="mb-8 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg p-6 flex items-center gap-4">
        <Image
          src="/roadmap/teacher.png"
          alt="AI Teacher"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h2 className="text-amber-900 font-bold text-xl">Giảng viên AI</h2>
          <p className="text-amber-800">
            Nâng cấp tài khoản VIP để trải nghiệm khóa học 1:1 với giảng viên AI
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`bg-gradient-to-r ${item.color} rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-2">{item.level}</h3>
                  <p className="text-white/90">{item.description}</p>
                  <div className="mt-4 bg-white/20 rounded-full h-2 w-full">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: `${(item.progress / item.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-white/90 mt-2 text-sm">
                    {item.progress}/{item.total}
                  </p>
                </div>
                <div className="ml-6">
                  <Image
                    src={item.img}
                    alt="Panda mascot"
                    width={100}
                    height={100}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {expandedItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-amber-50 rounded-lg mt-2 p-6 shadow-inner"
                >
                  <h4 className="font-bold text-amber-900 mb-4">Chi tiết khóa học:</h4>
                  <ul className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-amber-800"
                      >
                        <span className="mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

