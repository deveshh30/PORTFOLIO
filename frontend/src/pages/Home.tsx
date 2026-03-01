const Home = () => {
    return (
        <div className="pt-24">
            {/* /* herosection *} */}
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="text-blue-500">Devesh Gupta</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 md:text-2xl ">
                        1st-year Engineering Student • Building with React & TypeScript
                    </p>
                    <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition">
                        View Projects
                    </button>

                    <button className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition">
                        Contact Me
                    </button>
                </div>

                </div>
            </section>

            <section id="about" className="py-20 px-6 bg-gray-900/50">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                add my details later heree
                Aspiring full-stack developer passionate about clean code, real-time apps, and learning SQL next.
                </p>
            </section>
        </div>
    )
};

export default Home;