

  function Contact() {
    return (
      <section id="contact" className= " py-20 bg-gray-200 text-gray-800">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-indigo-800">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-8" style={{color:'#000'}}>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <a
              href="mailto:shubhambairagi6936@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              GitHub
            </a>
          </div>
         
        </div>
      </section>
    );
  }
  export default Contact;