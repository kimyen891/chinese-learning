'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const courseLinks = [
    {
        title: "Khóa học cho người đi làm",
        slug: "working"
    },
    {
        title: "Khóa học chứng chỉ HSK",
        slug: "hsk"
    },
    {
        title: "Khóa học cho giao tiếp",
        slug: "speaking"
    },
    {
        title: "Khoá học luyện thi HSK",
        slug: "#"
    },
    {
        title: "Khóa học cấp tốc",
        slug: "#"
    },
    {
        title: "Khoá gia sư tiếng Trung",
        slug: "#"
    }
];

export default function AnimatedSidebar() {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-1/4 hidden xl:block p-4"
        >
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-[#689F38]">Khóa học Premium</h2>
                <ul className="space-y-3">
                    {courseLinks.map((course, index) => (
                        <li key={index}>
                            <Link
                                href={`/course?code=${course.slug}`}
                                className="flex items-center hover:text-[#689F38] transition-colors cursor-pointer group"
                            >
                                <span className="mr-2 group-hover:scale-110 transition-transform">⭐️</span>
                                <span>{course.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-[#689F38] text-xl font-bold mb-4">Có gì mới?</h2>
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_PATH_IMG}/grow.jpg`}
                                alt="Growing up With Chinese"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                        </div>
                        <div className="w-full text-black">
                            <h1 className="text-xl font-bold mb-3">Trưởng Thành Cùng Tiếng Trung 成长汉语</h1>
                            <p className="text-sm text-gray-600">
                                Thú vị, vui nhộn và dễ theo dõi! Bộ giáo trình này sẽ giúp bạn làm chủ 300 cụm từ
                                tiếng Trung phổ biến nhất trong giao tiếp hàng ngày. Được dẫn dắt bởi Charlotte MacInnis,
                                một ngôi sao được khán giả Trung Quốc yêu mến với biệt danh Ai Hua.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-[#689F38] text-xl font-bold mb-4">Thông báo</h2>
                    <h3 className="text-lg font-semibold mb-2">&ldquo;Trưởng Thành Cùng Tiếng Trung&rdquo; đã trở lại!!!</h3>
                    <p className="text-sm text-gray-600">
                        Phát sóng trực tuyến &ldquo;Trưởng Thành Cùng Tiếng Trung&rdquo; tiếp tục với các bài học mới.
                        (Bài 76-100) Hãy tham gia và học ngay!
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
