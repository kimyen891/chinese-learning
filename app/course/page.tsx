'use client';

import { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const courseData = {
    working: {
        title: "Khóa học cho người đi làm",
        description: "Khóa học thiết kế dành riêng cho người đi làm với 20 câu hỏi tập trung vào từ vựng và giao tiếp trong môi trường công sở.",
        questions: [
            {
                id: 1,
                question: "在办公室，'请问您贵姓？' 是什么意思？",
                options: [
                    "A. Xin hỏi tên anh/chị là gì?",
                    "B. Xin chào anh/chị",
                    "C. Tạm biệt anh/chị",
                    "D. Chúc anh/chị một ngày tốt lành"
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "'我是公司的新员工' 在职场中是什么意思？",
                options: [
                    "A. Tôi là nhân viên mới của công ty",
                    "B. Tôi là giám đốc công ty",
                    "C. Tôi là khách hàng",
                    "D. Tôi là đối tác"
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "如何礼貌地请同事帮忙？",
                options: [
                    "A. 麻烦您帮我一下",
                    "B. 帮我",
                    "C. 快点帮我",
                    "D. 你必须帮我"
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "'加班'是什么意思？",
                options: [
                    "A. Làm thêm giờ",
                    "B. Nghỉ phép",
                    "C. Đi công tác",
                    "D. Họp hành"
                ],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "在会议中，'请发言' 是什么意思？",
                options: [
                    "A. Mời phát biểu",
                    "B. Xin phép ra ngoài",
                    "C. Kết thúc cuộc họp",
                    "D. Bắt đầu cuộc họp"
                ],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "'deadline' 用中文怎么说？",
                options: [
                    "A. 截止日期",
                    "B. 开始时间",
                    "C. 午休时间",
                    "D. 下班时间"
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "如何表达'这个项目很紧急'？",
                options: [
                    "A. 这个项目很着急",
                    "B. 这个项目不重要",
                    "C. 这个项目可以等",
                    "D. 这个项目很简单"
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "'我们开个视频会议' 是什么意思？",
                options: [
                    "A. Chúng ta họp online",
                    "B. Chúng ta gặp trực tiếp",
                    "C. Chúng ta nói chuyện sau",
                    "D. Chúng ta hủy cuộc họp"
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "在职场中，'请假'怎么说？",
                options: [
                    "A. 申请休假",
                    "B. 加班",
                    "C. 出差",
                    "D. 开会"
                ],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "'发送邮件' 是什么意思？",
                options: [
                    "A. Gửi email",
                    "B. Nhận email",
                    "C. Xóa email",
                    "D. Đọc email"
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: "如何说'我需要打印文件'？",
                options: [
                    "A. 我要打印文件",
                    "B. 我要删除文件",
                    "C. 我要保存文件",
                    "D. 我要发送文件"
                ],
                correctAnswer: 0
            }
        ]
    },
    hsk: {
        title: "Khóa học chứng chỉ HSK",
        description: "Khóa học chuẩn bị cho kỳ thi HSK với 20 câu hỏi ở các cấp độ khác nhau tập trung vào ngữ pháp và từ vựng theo chuẩn kỳ thi.",
        questions: [
            {
                id: 1,
                question: "选择正的语法结构: '虽然..., 但是...'",
                options: [
                    "A. 虽然今天下雨，但是我去上班",
                    "B. 虽然今天下雨，我去上班但是",
                    "C. 但是今天下雨，虽然我去上班",
                    "D. 今天下雨虽然，但是我去上班"
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "'因为...所以...' 的正确用法是：",
                options: [
                    "A. 因为他学习努力，所以考试及格了",
                    "B. 所以他学习努力，因为考试及格了",
                    "C. 因为所以他学习努力，考试及格了",
                    "D. 他学习努力因为，所以考试及格了"
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "选择正确的比较句：",
                options: [
                    "A. 他比我高三岁",
                    "B. 他比我高三个岁",
                    "C. 他三岁比我高",
                    "D. 他高比我三岁"
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "'一边...一边...' ��正确用法：",
                options: [
                    "A. 他一边走路一边听音乐",
                    "B. 他一边走路听音乐一边",
                    "C. 一边他走路一边听音乐",
                    "D. 走路一边他一边听音乐"
                ],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "选择正确的被动句：",
                options: [
                    "A. 这本书被他看完了",
                    "B. 这本书看完了被他",
                    "C. 被他这本书看完了",
                    "D. 看完了这本书被他"
                ],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "'是...的' 的正确用法：",
                options: [
                    "A. 他是坐飞机来的",
                    "B. 他是来的坐飞机",
                    "C. 是他坐飞机的来",
                    "D. 坐飞机是他来的"
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "选择正确的程度补语：",
                options: [
                    "A. 他跑得很快",
                    "B. 他��很快得",
                    "C. 他得跑很快",
                    "D. 他很快跑得"
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "'把' 字句的正确用法：",
                options: [
                    "A. 请把窗户关上",
                    "B. 请关上把窗户",
                    "C. 把请窗户关上",
                    "D. 窗户请把关上"
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "选择正确的时态表达：",
                options: [
                    "A. 我已经吃过了",
                    "B. 我过吃已经了",
                    "C. 已经我吃过了",
                    "D. 吃过我已经了"
                ],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "'越来越...' 的正确用法：",
                options: [
                    "A. 天气越来越冷了",
                    "B. 越天气来越冷了",
                    "C. 天气来越来越冷了",
                    "D. 越来天气越冷了"
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: "选择正确的可能补语：",
                options: [
                    "A. 这个字我写得出来",
                    "B. 这个字我得写出来",
                    "C. 这个字出来我写得",
                    "D. 得出来这个字我写"
                ],
                correctAnswer: 0
            }
        ]
    },
    speaking: {
        title: "Khóa học cho giao tiếp",
        description: "Khóa học với 20 câu hỏi tập trung vào kỹ năng giao tiếp, phát âm và các tình huống đối thoại thực tế hàng ngày.",
        questions: [
            {
                id: 1,
                question: "在餐厅点菜时，如何礼貌地说 '我要这个'？",
                options: [
                    "A. 我想要这个，谢谢",
                    "B. 给我这个",
                    "C. 这个，快点",
                    "D. 要这个"
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "如何询问路人地铁站在哪里？",
                options: [
                    "A. 请问地铁站怎么走？",
                    "B. 地铁站在哪儿",
                    "C. 告诉我地铁站",
                    "D. 地铁站"
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "在商店购物时如何询问价格？",
                options: [
                    "A. 请问这个多少钱？",
                    "B. 这个什么价格",
                    "C. 多少",
                    "D. 钱"
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "如何礼貌地打招呼？",
                options: [
                    "A. 您好，早上好",
                    "B. 喂",
                    "C. 嘿",
                    "D. 在吗"
                ],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "在电话中如何说'稍等一下'？",
                options: [
                    "A. 请稍等一下",
                    "B. 等一下",
                    "C. 等等",
                    "D. 等"
                ],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "如何表达'我听不懂'？",
                options: [
                    "A. 对不起，我没听懂",
                    "B. 听不懂",
                    "C. 不懂",
                    "D. 什么"
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "在咖啡店如何点咖啡？",
                options: [
                    "A. 我要一杯美式咖啡，谢谢",
                    "B. 给我咖啡",
                    "C. 咖啡，快点",
                    "D. 来杯咖啡"
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "如何约朋友周末见面？",
                options: [
                    "A. 周末有空一起喝咖啡吗？",
                    "B. 周末见",
                    "C. 出来",
                    "D. 见面"
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "如何表达'我迟到了'？",
                options: [
                    "A. 对不起，我来晚了",
                    "B. 我迟到",
                    "C. 晚了",
                    "D. 不好意思"
                ],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "在饭店如何���服务员？",
                options: [
                    "A. 服务员，麻烦您",
                    "B. 喂，服务员",
                    "C. 过来",
                    "D. 服务员"
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: "如何礼貌地道别？",
                options: [
                    "A. 再见，祝您有愉快的一天",
                    "B. 拜拜",
                    "C. 走了",
                    "D. 回见"
                ],
                correctAnswer: 0
            }
        ]
    }
};

export default function CoursePage() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code') as string;
    const course = courseData[code as keyof typeof courseData];
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(20).fill(-1));
    const [showResults, setShowResults] = useState(false);

    if (!course) {
        return <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl text-gray-600">Không tìm thấy khóa học</h1>
        </div>;
    }

    const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    // const handleSubmit = () => {
    //     setShowResults(true);
    // };

    const calculateScore = () => {
        return course.questions.reduce((score, question, index) => {
            return score + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                    <p className="text-gray-600 mb-8">{course.description}</p>

                    {!showResults ? (
                        <div className="space-y-8">
                            {course.questions.map((question, questionIndex) => (
                                <div
                                    key={question.id}
                                    className={`bg-white p-6 rounded-lg shadow-md relative ${questionIndex >= 10 ? 'opacity-50' : ''
                                        }`}
                                >
                                    <h3 className="text-lg font-semibold mb-4">
                                        Câu {questionIndex + 1}/20: {question.question}
                                    </h3>
                                    <div className="space-y-3">
                                        {question.options.map((option, optionIndex) => (
                                            <label
                                                key={optionIndex}
                                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors
                                                    ${questionIndex >= 10 ? 'pointer-events-none' : ''}
                                                    ${selectedAnswers[questionIndex] === optionIndex
                                                        ? 'bg-blue-50 border-2 border-blue-500'
                                                        : 'hover:bg-gray-50 border-2 border-transparent'}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    className="hidden"
                                                    checked={selectedAnswers[questionIndex] === optionIndex}
                                                    onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                                                    disabled={questionIndex >= 10}
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Icon khóa cho câu hỏi bị khóa */}
                                    {questionIndex >= 10 && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 rounded-lg">
                                            <div className="bg-white p-4 rounded-full shadow-lg">
                                                <LockClosedIcon className="h-8 w-8 text-gray-400" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    // onClick={handleSubmit}
                                    onClick={() => window.location.href = '/upgrade'}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                                >
                                    <span>Học thử miễn phí</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => window.location.href = '/upgrade'}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    <span>Đăng ký khóa học ngay</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h2 className="text-2xl font-bold mb-4">Kết quả</h2>
                            <p className="text-lg mb-4">
                                Số câu đúng: {calculateScore()}/10
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => {
                                        setShowResults(false);
                                        setSelectedAnswers(Array(20).fill(-1));
                                    }}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Làm lại
                                </button>
                                <button
                                    onClick={() => window.location.href = '/upgrade'}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Đăng ký khóa học ngay
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
