'use client'
import { motion } from 'framer-motion'

export default function StudyAbroad() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold mb-6">Du học Trung Quốc</h1>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Tại sao chọn du học Trung Quốc?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cơ hội học tập tại một trong những nền kinh tế lớn nhất thế giới</li>
            <li>Trải nghiệm văn hóa phong phú và lâu đời</li>
            <li>Cải thiện kỹ năng tiếng Trung trong môi trường bản ngữ</li>
            <li>Chi phí học tập và sinh hoạt hợp lý</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Các bước chuẩn bị</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Chọn trường và chương trình học</li>
            <li>Chuẩn bị hồ sơ xin học</li>
            <li>Xin visa du học</li>
            <li>Tìm chỗ ở và chuẩn bị cho cuộc sống mới</li>
          </ol>
        </motion.div>

      </div>
    </motion.div>
  )
}

