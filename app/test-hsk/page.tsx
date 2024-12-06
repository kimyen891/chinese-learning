'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Radio, RadioGroup } from "@nextui-org/react"

// Định nghĩa kiểu dữ liệu cho câu hỏi
interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

// Mảng câu hỏi mẫu (bạn có thể thay thế bằng dữ liệu thực)
const questions: Question[] = [
  {
    id: 1,
    question: "你好 có nghĩa là gì?",
    options: ["A. Tạm biệt", "B. Xin chào", "C. Cảm ơn", "D. Xin lỗi"],
    correctAnswer: "B. Xin chào"
  },
  {
    id: 2,
    question: "再见 có nghĩa là gì?",
    options: ["A. Tạm biệt", "B. Xin chào", "C. Cảm ơn", "D. Xin lỗi"],
    correctAnswer: "A. Tạm biệt"
  },
  {
    id: 3,
    question: "谢谢 có nghĩa là gì?",
    options: ["A. Tạm biệt", "B. Xin chào", "C. Cảm ơn", "D. Xin lỗi"],
    correctAnswer: "C. Cảm ơn"
  },
  {
    id: 4,
    question: "对不起 có nghĩa là gì?",
    options: ["A. Tạm biệt", "B. Xin chào", "C. Cảm ơn", "D. Xin lỗi"],
    correctAnswer: "D. Xin lỗi"
  },
  {
    id: 5,
    question: "我 có nghĩa là gì?",
    options: ["A. Tôi", "B. Bạn", "C. Anh ấy", "D. Cô ấy"],
    correctAnswer: "A. Tôi"
  },
  {
    id: 6,
    question: "你 có nghĩa là gì?",
    options: ["A. Tôi", "B. Bạn", "C. Anh ấy", "D. Cô ấy"],
    correctAnswer: "B. Bạn"
  },
  {
    id: 7,
    question: "是 có nghĩa là gì?",
    options: ["A. Không phải", "B. Là", "C. Có", "D. Không"],
    correctAnswer: "B. Là"
  },
  {
    id: 8,
    question: "不是 có nghĩa là gì?",
    options: ["A. Không phải", "B. Là", "C. Có", "D. Không"],
    correctAnswer: "A. Không phải"
  },
  {
    id: 9,
    question: "什么 có nghĩa là gì?",
    options: ["A. Ai", "B. Cái gì", "C. Ở đâu", "D. Khi nào"],
    correctAnswer: "B. Cái gì"
  },
  {
    id: 10,
    question: "哪里 có nghĩa là gì?",
    options: ["A. Ai", "B. Cái gì", "C. Ở đâu", "D. Khi nào"],
    correctAnswer: "C. Ở đâu"
  },
  {
    id: 11,
    question: "现在 có nghĩa là gì?",
    options: ["A. Hôm qua", "B. Hôm nay", "C. Ngày mai", "D. Bây giờ"],
    correctAnswer: "D. Bây giờ"
  },
  {
    id: 12,
    question: "今天 có nghĩa là gì?",
    options: ["A. Hôm qua", "B. Hôm nay", "C. Ngày mai", "D. Bây giờ"],
    correctAnswer: "B. Hôm nay"
  },
  {
    id: 13,
    question: "明天 có nghĩa là gì?",
    options: ["A. Hôm qua", "B. Hôm nay", "C. Ngày mai", "D. Bây giờ"],
    correctAnswer: "C. Ngày mai"
  },
  {
    id: 14,
    question: "喜欢 có nghĩa là gì?",
    options: ["A. Thích", "B. Ghét", "C. Yêu", "D. Nhớ"],
    correctAnswer: "A. Thích"
  },
  {
    id: 15,
    question: "爱 có nghĩa là gì?",
    options: ["A. Thích", "B. Ghét", "C. Yêu", "D. Nhớ"],
    correctAnswer: "C. Yêu"
  },
  {
    id: 16,
    question: "吃 có nghĩa là gì?",
    options: ["A. Ăn", "B. Uống", "C. Ngủ", "D. Chạy"],
    correctAnswer: "A. Ăn"
  },
  {
    id: 17,
    question: "喝 có nghĩa là gì?",
    options: ["A. Ăn", "B. Uống", "C. Ngủ", "D. Chạy"],
    correctAnswer: "B. Uống"
  },
  {
    id: 18,
    question: "睡觉 có nghĩa là gì?",
    options: ["A. Ăn", "B. Uống", "C. Ngủ", "D. Chạy"],
    correctAnswer: "C. Ngủ"
  },
  {
    id: 19,
    question: "学习 có nghĩa là gì?",
    options: ["A. Học tập", "B. Làm việc", "C. Nghỉ ngơi", "D. Vui chơi"],
    correctAnswer: "A. Học tập"
  },
  {
    id: 20,
    question: "工作 có nghĩa là gì?",
    options: ["A. Học tập", "B. Làm việc", "C. Nghỉ ngơi", "D. Vui chơi"],
    correctAnswer: "B. Làm việc"
  }
]

export default function HSKTest() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (questionId: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    })
  }

  // Sửa lại cách khởi tạo questionRefs
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const resultsRef = useRef<HTMLDivElement>(null)

  const calculateScore = () => {
    // Kiểm tra câu hỏi chưa trả lời
    const unansweredQuestion = questions.findIndex((_, index) => !answers[index]);

    if (unansweredQuestion !== -1) {
      // Nếu có câu chưa trả lời, scroll đến câu đó
      questionRefs.current[unansweredQuestion]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      return;
    }

    // Tính điểm như bình thường
    let correctAnswers = 0;
    Object.keys(answers).forEach((questionIndex) => {
      if (answers[Number(questionIndex)] === questions[Number(questionIndex)].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);

    // Scroll đến kết quả
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Kiểm tra HSK</h1>

      {!showResults ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-8">
            {questions.map((question, index) => (
              <div
                key={question.id}
                ref={el => { questionRefs.current[index] = el }}
                className="border-b pb-6 last:border-b-0"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Câu {index + 1}/{questions.length}
                </h2>
                <p className="text-lg mb-4">{question.question}</p>

                <RadioGroup
                  value={answers[index]}
                  onValueChange={(value) => handleAnswerSelect(index, value)}
                  className="space-y-2"
                >
                  {question.options.map((option, optionIndex) => (
                    <Radio key={optionIndex} value={option}>
                      {option}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button
              color="success"
              onClick={calculateScore}
            >
              Nộp bài
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          ref={resultsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-md p-6 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Kết quả của bạn</h2>
          <p className="text-xl">
            Số câu đúng: {score}/{questions.length}
          </p>
          <p className="text-lg mt-2">
            Tỷ lệ: {((score / questions.length) * 100).toFixed(1)}%
          </p>
          <Button
            color="primary"
            className="mt-6"
            onClick={() => {
              setShowResults(false)
              setAnswers({})
              setScore(0)
            }}
          >
            Làm lại bài kiểm tra
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}

