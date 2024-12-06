'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export default function AnimatedFooter() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <footer className="bg-[#689F38] mt-16">
                <div className="container mx-auto py-8 md:py-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <Facebook className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">ĐỊA CHỈ CỦA CHÚNG TÔI</h3>
                            <div className="space-y-2 text-white">
                                <p>Thêm vị trí của bạn</p>
                                <p>123 Đường ABC,</p>
                                <p>Thành phố DEF</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">SĐT</h3>
                            <p className="text-white">0123456789</p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">GMAIL</h3>
                            <p className="text-white">Pandahsk@gmail.com</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[#689F38]">
                        <p className="text-center text-white">
                            © 2023 Learn Chinese. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
}