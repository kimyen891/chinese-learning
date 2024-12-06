"use client"
import { Button } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Suspense } from 'react';

// Định nghĩa kiểu dữ liệu cho khóa học
interface Course {
    title: string;
    price: number;
    unit: string;
    duration: string;
    code: string;
    features: string[];
}

// Data khóa học (copy từ trang upgrade)
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

function PaymentContent() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<string>('banking');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const course = courses.find(c => c.code === code);
        if (course) {
            setSelectedCourse(course);
        }
    }, [code]);

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    if (!selectedCourse) {
        return <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center"
        >
            <p className="text-xl text-gray-600">Không tìm thấy khóa học</p>
        </motion.div>;
    }

    const handlePayment = async () => {
        setIsLoading(true);

        // Giả lập xử lý thanh toán trong 3 giây
        await new Promise(resolve => setTimeout(resolve, 3000));

        setIsLoading(false);
        setShowSuccess(true);

        // Tự động đóng popup sau 3 giây
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Thanh toán khóa học</h1>
                        <p className="mt-2 text-gray-600">Vui lòng kiểm tra thông tin và chọn phương thức thanh toán</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Thông tin khóa học</h2>
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-medium text-gray-900">{selectedCourse.title}</h3>
                            <p className="text-gray-600">Thời gian: {selectedCourse.duration}</p>
                            <div className="mt-2 text-2xl font-bold text-[#689F38]">
                                {formatNumber(selectedCourse.price)}{selectedCourse.unit}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Phương thức thanh toán</h2>

                            <div className="space-y-2">
                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="banking"
                                        checked={paymentMethod === 'banking'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 text-[#689F38]"
                                    />
                                    <span className="flex-1">
                                        <span className="font-medium">Chuyển khoản ngân hàng</span>
                                        <p className="text-sm text-gray-500">Chuyển khoản trực tiếp qua tài khoản ngân hàng</p>
                                    </span>
                                </label>

                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="momo"
                                        checked={paymentMethod === 'momo'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 text-[#689F38]"
                                    />
                                    <span className="flex-1">
                                        <span className="font-medium">Ví MoMo</span>
                                        <p className="text-sm text-gray-500">Thanh toán qua ví điện tử MoMo</p>
                                    </span>
                                </label>

                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="vnpay"
                                        checked={paymentMethod === 'vnpay'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 text-[#689F38]"
                                    />
                                    <span className="flex-1">
                                        <span className="font-medium">VNPay</span>
                                        <p className="text-sm text-gray-500">Thanh toán qua cổng VNPay</p>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between mb-4">
                            <span className="font-medium">Tổng thanh toán:</span>
                            <span className="text-xl font-bold text-[#689F38]">
                                {formatNumber(selectedCourse.price)}{selectedCourse.unit}
                            </span>
                        </div>

                        <Button
                            onClick={handlePayment}
                            className="w-full bg-[#689F38] hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Đang xử lý...
                                </div>
                            ) : (
                                'Thanh toán ngay'
                            )}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Popup thành công */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Thanh toán thành công!
                            </h3>
                            <p className="text-gray-600">
                                Cảm ơn bạn đã đăng ký khóa học. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentContent />
        </Suspense>
    );
}
