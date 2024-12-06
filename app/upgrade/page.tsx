"use client"
import { Button, Card } from "@nextui-org/react"
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
// Định nghĩa kiểu dữ liệu cho khóa học
interface Course {
    title: string;
    price: number;
    unit: string;
    duration: string;
    code: string;
    features: string[];
}

const courses: Course[] = [
    {
        title: "Khóa học cho người đi làm",
        price: 2990000,
        unit: "đ",
        duration: "6 tháng",
        code: "WORKING",
        features: [
            "Lịch học linh hoạt",
            "Giáo trình thiết kế riêng cho người đi làm",
            "Tập trung vào từ vựng và giao tiếp trong công việc",
            "Có video bài giảng để học lại",
            "Hỗ trợ 1-1 với giáo viên"
        ]
    },
    {
        title: "Khóa học chứng chỉ HSK",
        price: 3490000,
        unit: "đ",
        duration: "8 tháng",
        code: "HSK_CERT",
        features: [
            "Lộ trình chuẩn bị thi HSK các cấp độ",
            "Ngân hàng đề thi phong phú",
            "Giáo viên có chứng chỉ HSK cao cấp",
            "Bài tập và kiểm tra định kỳ",
            "Đảm bảo đầu ra"
        ]
    },
    {
        title: "Khóa học giao tiếp",
        price: 2490000,
        unit: "đ",
        duration: "4 tháng",
        code: "SPEAKING",
        features: [
            "Tập trung phát triển kỹ năng nói",
            "Học với giáo viên bản ngữ",
            "Luyện phát âm chuẩn",
            "Tình huống giao tiếp thực tế",
            "Lớp học nhỏ 4-6 học viên"
        ]
    },
    {
        title: "Khóa luyện thi HSK",
        price: 4990000,
        unit: "đ",
        duration: "3 tháng",
        code: "HSK_PREP",
        features: [
            "Chương trình cấp tốc luyện thi",
            "Phương pháp làm bài thi hiệu quả",
            "Mô phỏng thi thử thường xuyên",
            "Tài liệu luyện thi chuyên sâu",
            "Cam kết đầu ra điểm số"
        ]
    },
    {
        title: "Khóa học cấp tốc",
        price: 1990000,
        unit: "đ",
        duration: "1 tháng",
        code: "EXPRESS",
        features: [
            "Học nhanh trong 30 ngày",
            "Tập trung kiến thức trọng tâm",
            "Học 1-1 hoặc nhóm nhỏ",
            "Lịch học linh động",
            "Giáo trình cô đọng, dễ nhớ"
        ]
    },
    {
        title: "Khóa gia sư tiếng Trung",
        price: 599000,
        unit: "đ/giờ",
        duration: "Linh hoạt",
        code: "TUTOR",
        features: [
            "Học 1-1 với giáo viên",
            "Tùy chỉnh nội dung theo nhu cầu",
            "Lịch học linh hoạt tối đa",
            "Giáo viên đến tận nơi",
            "Theo dõi tiến độ sát sao"
        ]
    }
]

// Thêm hàm format số
const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function UpgradePage() {
    const router = useRouter();

    const handleRegister = (courseCode: string) => {
        router.push(`/payment?code=${courseCode}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        Nâng cấp tài khoản
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Chọn khóa học phù hợp với mục tiêu của bạn
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="p-6 flex flex-col h-full">
                                <div>
                                    <div className="grid grid-cols-12 gap-2">
                                        <h3 className="text-2xl font-bold text-gray-900 col-span-10">{course.title}</h3>
                                        <div className="bg-yellow-400 w-10 h-10 col-span-2 flex items-center justify-center rounded-full border-2 border-yellow-300">
                                            <span className="text-xl" style={{ lineHeight: 1 }}>⭐️</span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {formatNumber(course.price)}{course.unit}
                                        </span>
                                        <span className="text-gray-600">/{course.duration}</span>
                                    </div>

                                    <ul className="mt-6 space-y-4">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-8">
                                    <Button
                                        className="w-full bg-[#689F38] hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
                                        onClick={() => handleRegister(course.code)}
                                    >
                                        Đăng ký ngay
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.div>)
}
