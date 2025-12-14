import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Sparkles, Cake } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-[#FAF8F5] dark:bg-[#F5F1EB] min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] to-[#FAF8F5] dark:from-[#FFF9F0] dark:to-[#F5F1EB] py-24 lg:py-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-sm border border-[#E8DCC6]/50">
                        <Cake className="w-5 h-5 text-primary" />
                        <span className="text-base font-semibold text-accent tracking-wide uppercase font-serif">Artisan sweets, made with love</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif text-accent dark:text-accent mb-8 leading-tight">
                        Parampara Ki  <span className="text-primary italic">Mithai</span> , Aaj Ke Andaaz Mei
                    </h1>
                    <p className="text-xl md:text-2xl text-[#5A4A3A] dark:text-[#5A4A3A] mb-12 max-w-3xl mx-auto leading-relaxed">
                       Pure Desi Ghee Mithai for Every Festival & Celebration
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A87C] to-[#D99A6A] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg tracking-wide"
                        >
                            Explore Sweets <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/register"
                            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white text-accent dark:text-accent border border-[#E8DCC6] dark:border-[#E8DCC6] px-10 py-4 rounded-full font-bold shadow-sm hover:bg-[#F5F1EB] dark:hover:bg-[#F5F1EB] transition-colors text-lg tracking-wide"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>

                {/* Abstract Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -left-1/4 w-1/3 h-full bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-accent dark:text-accent mb-4">Why Choose Parampara Sweets</h2>
                    <p className="text-[#5A4A3A] dark:text-[#5A4A3A] max-w-2xl mx-auto">We're not just a sweet shop - we're artisans dedicated to creating unforgettable taste experiences.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { icon: Sparkles, title: "Handcrafted Quality", desc: "Every sweet is made with love using premium ingredients" },
                        { icon: Truck, title: "Fast Delivery", desc: "Fresh sweets delivered to your doorstep within hours" },
                        { icon: ShieldCheck, title: "100% Satisfaction", desc: "Not happy? We'll make it right, guaranteed" }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white dark:bg-white p-10 rounded-[2.5rem] border border-[#E8DCC6]/50 dark:border-[#E8DCC6] hover:shadow-xl transition-all duration-300 text-center shadow-sm">
                            <div className="w-20 h-20 bg-[#F5F1EB] dark:bg-[#F5F1EB] rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-inner">
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-accent dark:text-accent mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-[#5A4A3A] dark:text-[#5A4A3A] leading-relaxed text-base font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Proof / Testimonials */}
            <div className="py-24 bg-white dark:bg-white transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-accent dark:text-accent mb-4">What Our Customers Say</h2>
                        <p className="text-[#5A4A3A] dark:text-[#5A4A3A]">Don't just take our word for it</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Srajan", text: "Absolutely amazing experience! The quality of sweets is outstanding and the service is top-notch. I've been ordering from here regularly and every time it's been perfect. Highly recommend to everyone!" },
                            { name: "Rahul Sharma", text: "Best sweet shop in town! The Kaju Katli is absolutely divine and the packaging is excellent. Fast delivery and fresh products every time. Will definitely order again!" },
                            { name: "Anjali Mehta", text: "The Gulab Jamun here is simply the best I've ever tasted. The texture is perfect and the syrup is just right. Great quality and amazing customer service. 5 stars!" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-[#FAF8F5] dark:bg-[#F5F1EB] p-8 rounded-2xl border border-[#E8DCC6] hover:border-primary/40 transition-colors shadow-sm">
                                <div className="flex gap-1 text-primary mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-lg text-accent dark:text-accent italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                                <div className="font-bold font-serif text-accent dark:text-accent flex items-center gap-2">
                                    <div className="w-10 h-10 bg-[#E8DCC6] rounded-full flex items-center justify-center text-primary font-bold text-sm">
                                        {testimonial.name[0]}
                                    </div>
                                    {testimonial.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Delivery Partners */}
                    <div className="mt-24 pt-16 border-t border-[#E8DCC6] dark:border-[#E8DCC6]">
                        <p className="text-center text-[#5A4A3A] dark:text-[#5A4A3A] font-medium mb-8 uppercase tracking-widest text-sm">Also Available On</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-90 transition-all duration-500">
                            {/* Zomato */}
                            <div className="bg-white/80 dark:bg-white/90 p-2 rounded-xl hover:scale-105 transition-transform">
                                <img src="/images/partners/zomato.png" alt="Zomato" className="h-8 md:h-10 object-contain" />
                            </div>

                            {/* Swiggy */}
                            <div className="bg-white/80 dark:bg-white/90 p-2 rounded-xl hover:scale-105 transition-transform">
                                <img src="/images/partners/swiggy.png" alt="Swiggy" className="h-8 md:h-10 object-contain" />
                            </div>

                            {/* Magicpin */}
                            <div className="flex items-center gap-2 bg-white/80 dark:bg-white/90 p-2 rounded-xl hover:scale-105 transition-transform">
                                <div className="w-8 h-8 bg-purple-600 rotate-45 transform flex items-center justify-center rounded-sm">
                                    <span className="text-white font-bold text-xl -rotate-45">!</span>
                                </div>
                                <span className="text-2xl font-bold text-purple-600 tracking-tight">magicpin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Footer */}
            <div className="bg-gradient-to-b from-[#FFF9F0] to-[#FAF8F5] dark:from-[#FFF9F0] dark:to-[#F5F1EB] py-32 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-6xl font-serif text-accent dark:text-accent mb-8">Ready to Satisfy Your Sweet Tooth?</h2>
                    <p className="text-xl text-[#5A4A3A] dark:text-[#5A4A3A] mb-10">Browse our collection of artisan sweets and find your new favorite treat.</p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A87C] to-[#D99A6A] text-white px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-xl tracking-wide"
                    >
                        Shop Now <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </div>


            <footer className="bg-white dark:bg-white py-8 border-t border-[#E8DCC6] dark:border-[#E8DCC6]">
                <div className="max-w-7xl mx-auto px-4 text-center sm:flex justify-between items-center text-[#5A4A3A] dark:text-[#5A4A3A] text-sm">
                    <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                        <Cake className="w-5 h-5 text-primary" />
                        <span className="font-serif font-bold text-accent dark:text-accent text-lg">Parampara Sweets</span>
                    </div>
                    <p>© 2024 Parampara Sweets. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
