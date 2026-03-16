import { useState, useEffect } from 'react';
import { FaUser, FaBriefcase, FaLightbulb, FaCode, FaFolderOpen, FaEnvelope, FaPhone, FaWhatsapp, FaCheckCircle, FaLock, FaBook, FaLinkedin, FaGlobe, FaDownload } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const downloadPDF = () => {
    // Create a link element to download the PDF
    const link = document.createElement('a');
    link.href = '/portfolio.pdf'; // Path to your PDF file in public folder
    link.download = 'Jonathan-HK-Williams-Portfolio.pdf';
    link.target = '_blank';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProjectModal = (projectName: string) => {
    setSelectedProject(projectName);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-lg font-bold">Jonathan HK Williams</h1>
            <p className="text-xs text-gray-400">Graphic | UI/UX Designer</p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="border-t border-gray-700">
            <ul className="py-2">
              {['about', 'skills', 'projects', 'experience', 'education', 'philosophy', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left px-4 py-3 font-semibold transition-colors ${
                      activeSection === section ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-black text-white p-8 flex-col">
        <div className="mb-12 text-center">
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-purple-600">
            <img 
              src="/images/profile-banner.jpg" 
              alt="Jonathan HK Williams" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center" style={{display: 'none'}}>
              <div className="text-center">
                <div className="text-3xl mb-1">👨‍💼</div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-1">Jonathan HK Williams</h1>
          <p className="text-gray-400 text-sm font-semibold">Graphic | UI/UX Designer</p>
        </div>

        <ul className="space-y-3 flex-1">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'about' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaUser size={18} />
              <span>About</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'skills' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaCode size={18} />
              <span>Skills</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'projects' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaFolderOpen size={18} />
              <span>Projects</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'experience' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaBriefcase size={18} />
              <span>Experience</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('education')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'education' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaBook size={18} />
              <span>Education</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('philosophy')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'philosophy' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaLightbulb size={18} />
              <span>Philosophy</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-3 w-full text-left px-4 py-3 transition-all rounded font-semibold ${
                activeSection === 'contact' ? 'bg-purple-600 text-white w-full' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaEnvelope size={18} />
              <span>Contact</span>
            </button>
          </li>
        </ul>

        <div className="mt-auto">
          <p className="text-xs text-gray-500">A passionate Graphic | UI/UX Designer based in Monrovia, Liberia.</p>
        </div>
      </nav>

      <main id="main-content" className="md:ml-64 flex-1 pt-16 md:pt-0">
        <section className="relative bg-purple-950 text-white">
          <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center min-h-[300px] md:h-64">
                <div className="w-full md:w-1/3 h-64 md:h-full order-1 md:order-1">
                  <img 
                    src="/images/profile-banner.jpg" 
                    alt="Jonathan HK Williams" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl sm:text-6xl mb-2">👨‍💼</div>
                      <p className="text-white font-semibold text-sm sm:text-base">Jonathan HK Williams</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 sm:p-6 text-center md:text-left order-2 md:order-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    Jonathan HK Williams
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-purple-200 font-semibold">
                    Graphic | UI/UX & Product Designer
                    <br />
                    2023-present
                  </p>
                  <div className="mt-6">
                    <button
                      id="download-pdf-btn"
                      onClick={downloadPDF}
                      className="inline-flex items-center gap-2 bg-white text-purple-950 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
                    >
                      <FaDownload size={16} />
                      Download Portfolio PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen p-4 sm:p-8 md:p-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black">About Me</h2>
            <div className="space-y-4 md:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-semibold">
              <p>
                I am Jonathan HK Williams, a passionate UI/UX Designer, Graphic Designer, and Product Designer based in Monrovia, Liberia. With a deep commitment to creating digital experiences that matter, I specialize in transforming business challenges into elegant, user-centered design solutions.
              </p>
              <p>
                My design philosophy centers on simplicity, functionality, and human centered thinking. I believe that great design is not just about aesthetics, it's about solving real problems and creating intuitive interfaces that users love to interact with. Every project I undertake is an opportunity to craft something meaningful.
              </p>
              <p>
                Throughout my career, I have worked on diverse projects ranging from ride-sharing platforms and education management systems to election platforms and agricultural marketplaces. I excel at bridging the gap between product vision and user reality, ensuring that every design decision is backed by research and user insights.
              </p>
              <p>
                Beyond my design work, I am passionate about sharing knowledge. As a Graphic Design Instructor, I mentor beginners in Adobe Creative Suite, helping them understand not just the tools, but the fundamental principles of good design. This teaching experience has deepened my understanding of design fundamentals and communication.
              </p>
              <p>
                I am driven by the opportunity to collaborate with innovative teams and contribute to projects that make a tangible difference. Let's create something extraordinary together.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="p-4 sm:p-8 md:p-16 border-b border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black">Skills & Expertise</h2>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold border-r-4 border-purple-700">Category</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Skills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-black text-lg border-r-4 border-gray-300">UI/UX Design</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">User Interface Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">User Experience Strategy</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Wireframing & Prototyping</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">User Research</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Information Architecture</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Mobile App Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Dashboard Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Accessibility (WCAG)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-black text-lg border-r-4 border-gray-300">Graphic Design</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Brand Identity Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Logo Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Marketing Graphics</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Social Media Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Print Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold">Typography</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-black text-lg border-r-4 border-gray-300">Design Tools</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/figma-tool.jpg" 
                              alt="Figma" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-purple-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-purple-600 font-bold text-xs">Fg</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Figma</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/photoshop-tool.jpg" 
                              alt="Adobe Photoshop" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-blue-600 font-bold text-xs">Ps</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Photoshop</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/illustrator-tool.jpg" 
                              alt="Adobe Illustrator" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-orange-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-orange-600 font-bold text-xs">Ai</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Illustrator</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/xd-tool.jpg" 
                              alt="Adobe XD" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-pink-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-pink-600 font-bold text-xs">Xd</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Adobe XD</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/canva-tool.jpg" 
                              alt="Canva" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-teal-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-teal-600 font-bold text-xs">Canva</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Canva</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 mb-1 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                            <img 
                              src="/images/sketch-tool.jpg" 
                              alt="Sketch" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-yellow-100 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-yellow-600 font-bold text-xs">Sk</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 font-semibold">Sketch</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen p-4 sm:p-8 md:p-16 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-black">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <img 
                    src="/images/karnue-project.jpg" 
                    alt="Karnue Ride Sharing Platform" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-center" style={{display: 'none'}}>
                    <div className="text-4xl mb-2">🏦</div>
                    <p className="text-purple-700 font-semibold">Karnue</p>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">Karnue – Ride Sharing</h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">UI/UX Design | 2024</p>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    Comprehensive ride sharing platform with booking, tracking, and payment systems. Designed for the US and Africa.
                  </p>
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Project
                  </button>
                  <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="text-left text-white max-w-sm">
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                          <FaLock className="w-3 h-3" /> NDA PROTECTED
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-3">Karnue Project</h4>
                      <p className="text-gray-200 font-bold text-sm">Due to confidentiality agreements, detailed project information cannot be displayed publicly.Schedule a one-on-one meeting to see the complete project details and case study.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <img 
                    src="/images/fundraizer-project.jpg" 
                    alt="Fundraizer Site UI " 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-center" style={{display: 'none'}}>
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-blue-700 font-semibold">Fundraizer</p>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">Fundraizer Site UI </h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">Dashboard Design | 2023</p>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    An online crowdfunding platform that allows individuals or organizations to raise money for a cause, project, emergency or someone in need.
                  </p>
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Project
                  </button>
                  <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="text-left text-white max-w-sm">
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                          <FaLock className="w-3 h-3" /> NDA PROTECTED
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-3">Fundraizer Site UI</h4>
                      <p className="text-gray-200 font-bold text-sm">Due to confidentiality agreements, detailed project information cannot be displayed publicly.Schedule a one-on-one meeting to see the complete project details and case study.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <img 
                    src="/images/electpal-project.jpg" 
                    alt="ElectPal School Election Platform" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-center" style={{display: 'none'}}>
                    <div className="text-4xl mb-2">🗳️</div>
                    <p className="text-green-700 font-semibold">ElectPal</p>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">ElectPal – Election Platform</h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">Product Design | 2023</p>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    Secure digital voting platform for schools with candidate registration, voter verification, and real-time results.
                  </p>
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Project
                  </button>
                  <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="text-left text-white max-w-sm">
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                          <FaLock className="w-3 h-3" /> NDA PROTECTED
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-3">ElectPal Project</h4>
                      <p className="text-gray-200 font-bold text-sm">Due to confidentiality agreements, detailed project information cannot be displayed publicly.Schedule a one-on-one meeting to see the complete project details and case study.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 relative">
                  <img 
                    src="/images/banking-project-card.jpg" 
                    alt="Banking Brand Identity Project" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏦</div>
                      <p className="text-orange-700 font-semibold">Banking Brand</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">Banking Brand Identity</h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">Graphic Design | 2023</p>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    Complete brand identity design for mobile banking service including logo, marketing materials, and visual guidelines.
                  </p>
                  <button onClick={() => openProjectModal('banking-brand')} className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Project
                  </button>
                  <div className="absolute top-4 left-2 z-10">
                  <div className="relative group/tooltip">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center cursor-help">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div className="absolute left-0 top-8 w-64 p-3 bg-black text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50">
                      <div className="font-semibold mb-1">Please read!</div>
                      <div>Project details and images will be updated in the next few days as we secure proper access to display these projects.</div>
                      <div className="absolute -top-2 left-4 w-4 h-4 bg-black transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 relative">
                  <img 
                    src="/images/ecommerce-project-card.jpg" 
                    alt="E-Commerce Brand Design Project" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🛒</div>
                      <p className="text-pink-700 font-semibold">E-Commerce</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">E-Commerce Brand Design</h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">Graphic Design | 2024</p>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    Brand identity and marketing materials for online retail platform including packaging, social media, and web graphics.
                  </p>
                  <button onClick={() => openProjectModal('ecommerce-brand')} className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Project
                  </button>
                  <div className="absolute top-4 left-2 z-10">
                  <div className="relative group/tooltip">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center cursor-help">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div className="absolute left-0 top-8 w-64 p-3 bg-black text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50">
                      <div className="font-semibold mb-1">Please read!</div>
                      <div>Project details and images will be updated in the next few days as we secure proper access to display these projects.</div>
                      <div className="absolute -top-2 left-4 w-4 h-4 bg-black transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors relative group">
                <div className="h-48 relative bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="grid grid-cols-2 gap-2 p-4 h-full">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/gallery-1.jpg" 
                        alt="Gallery Item 1" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">🖼️</div>
                          <p className="text-gray-700 font-semibold text-xs">Gallery 1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/gallery-2.jpg" 
                        alt="Gallery Item 2" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">🖼️</div>
                          <p className="text-gray-700 font-semibold text-xs">Gallery 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative group">
                  <h3 className="text-xl font-bold text-black mb-2">Flyer Design Gallery</h3>
                  <p className="text-gray-700 leading-relaxed text-sm font-semibold mb-4">
                    A curated collection of design work showcasing various creative projects and visual communication solutions.
                  </p>
                  <button onClick={() => openProjectModal('design-gallery')} className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors">
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl text-gray-700 font-bold">
                + Many more UI/UX | Graphic Design projects are available, Reach me lets have a Walkthrough them if needed..
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="min-h-screen p-4 sm:p-8 md:p-16 border-b border-gray-200 bg-gray-50">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black">Professional Experience</h2>

            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">Freelance</h3>
                  <p className="text-purple-600 font-semibold text-sm mt-1">2024 – Present</p>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Work as an independent designer providing UI/UX and graphic design services to organizations and businesses, while also contributing to design education through volunteer instruction.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span className="font-semibold">Design flyers, posters, and campaign graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span className="font-semibold">Design promotional and print materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span className="font-semibold">Ensure consistent and engaging visual communication across designs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">UI/UX Designer</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                  Design user-focused digital interfaces and product concepts for organizations including Smart Liberia, Zongea Institute of Technology, and Walamen and other brands...
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <img 
                      src="/images/smart-liberia-project.jpg" 
                      alt="Smart Liberia Project" 
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="text-sm mb-1">🎓</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="/images/zongea-project.jpg" 
                      alt="Zongea Institute Project" 
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="text-sm mb-1">🏫</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="/images/walamen-project.jpg" 
                      alt="Walamen Project" 
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="text-sm mb-1">🏢</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">Volunteer Graphic Design Instructor</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Serve as a volunteer instructor supporting students interested in graphic design at the Zongea Institue of Technology
                </p>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-purple-600" size={24} />
                  <a 
                    href="https://zongeatech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors cursor-pointer relative group"
                    title="Click to visit Zongea Institute of Technology website"
                  >
                    zongeatech.com
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Click to visit website
                    </span>
                  </a>
                  <FaLinkedin className="text-blue-600" size={24} />
                  <a 
                    href="https://www.linkedin.com/school/zongea-institute-of-technology/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors cursor-pointer relative group"
                    title="Click to view Zongea Institute of Technology LinkedIn profile"
                  >
                    Zongea Institute of Technology
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Click to view LinkedIn profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="min-h-screen p-4 sm:p-8 md:p-16 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black">Education</h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src="/images/zongea-logo.png" 
                      alt="Zongea Institute of Technology Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="text-xl">🎓</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Zongea Institute of Technology</h3>
                    <p className="text-purple-600 font-semibold text-sm mt-1">Diploma / Certificate in Computer Studies | 2023 – 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Completed training focused on computer fundamentals, digital tools, and practical technology skills. The program strengthened my foundation in computing and helped shape my interest in digital design and technology systems.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src="/images/orange-digital-logo.png" 
                      alt="Orange Digital Center Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="text-xl">📚</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Orange Digital Center</h3>
                    <p className="text-purple-600 font-semibold text-sm mt-1">UI/UX Design Training Program | 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  Completed hands-on training in User Interface and User Experience design, focusing on user-centered design principles, interface structure, and digital product usability.
                </p>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-black mb-3">Key focus areas included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <span className="font-semibold">• User Research and User Flows</span>
                    <span className="font-semibold">• Wireframing and Prototyping</span>
                    <span className="font-semibold">• Interface Design Principles</span>
                    <span className="font-semibold">• Usability and Interaction Design</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black">Independent Learning — UI/UX & Graphic Design</h3>
                  <p className="text-purple-600 font-semibold text-sm mt-1">Self-Directed Learning | 2023 – Present</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  Alongside formal training, I continuously develop my design skills through self-guided learning, online resources, and real project experience. My focus has been on building practical knowledge by designing digital products, visual systems, and user-centered interfaces.
                </p>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-black mb-3">Areas of continuous learning include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <span className="font-semibold">• Product Design</span>
                    <span className="font-semibold">• Digital Platforms</span>
                    <span className="font-semibold">• Design Systems</span>
                    <span className="font-semibold">• User Experience Strategy</span>
                    <span className="font-semibold">• Technology and Education Tools</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed font-semibold mt-6">
                  My learning approach is based on constant practice, research, and improving through real design work and projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="p-4 sm:p-8 md:p-16 border-b border-gray-200 bg-black text-white">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-white">Design Philosophy</h2>
            <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed italic border-l-4 border-purple-600 pl-4 sm:pl-6 md:pl-8 mb-8 md:mb-12">
              "I believe design should be simple, useful, and human-centered. My goal is always to
              create work that solves real problems while delivering clear and enjoyable user experiences."
            </blockquote>

            <div className="space-y-8">
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen p-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-16 font-semibold">Ready to create something amazing? Let's connect.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-purple-600 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Phone</p>
                      <a href="tel:+231776201256" className="text-lg text-black font-semibold hover:text-purple-600 transition-colors">
                        +231 776 201 256
                      </a>
                      <p className="text-gray-700 text-sm mt-1 font-semibold">or</p>
                      <a href="tel:+231886332914" className="text-lg text-black font-semibold hover:text-purple-600 transition-colors">
                        +231 886 332 914
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaWhatsapp className="text-purple-600 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">WhatsApp Business</p>
                      <a href="https://wa.me/231776201256" target="_blank" rel="noopener noreferrer" className="text-lg text-black font-semibold hover:text-purple-600 transition-colors">
                        +231 776 201 256
                      </a>
                      <p className="text-gray-700 text-sm mt-2 font-semibold">Message me for quick responses</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-purple-600 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Email</p>
                      <a href="mailto:williamslight91@gmail.com" className="text-lg text-black font-semibold hover:text-purple-600 transition-colors break-all">
                        williamslight91@gmail.com
                      </a>
                      <p className="text-gray-700 text-sm mt-2 font-semibold">For detailed inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaUser className="text-purple-600 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Location</p>
                      <p className="text-lg text-black font-semibold">Monrovia, Liberia</p>
                      <p className="text-gray-700 text-sm mt-1 font-semibold">Available for remote collaboration worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modals */}
      {selectedProject === 'banking-brand' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Banking Brand Identity</h2>
              <button onClick={closeProjectModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-purple-600 font-semibold mb-6">Graphic Design | 2023</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  Complete brand identity design for a mobile banking service targeting young professionals. The project included logo design, color palette development, typography selection, marketing materials, and comprehensive brand guidelines. The goal was to create a modern, trustworthy, and approachable brand identity that would appeal to digitally-savvy customers while maintaining the credibility expected in financial services.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brand system was designed to work across digital platforms, physical branches, and marketing campaigns, ensuring consistent brand recognition and customer trust.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Brand Elements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/banking-logo.png" 
                      alt="Banking Logo" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">🏦</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/banking-colors.png" 
                      alt="Banking Color Palette" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">🎨</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/banking-typography.png" 
                      alt="Banking Typography" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">📱</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/banking-grid.png" 
                      alt="Banking Grid System" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">📐</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
              <img 
                src="/images/banking-banner.jpg" 
                alt="Banking Marketing Materials" 
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="text-3xl mb-2">💳</div>
                  <p className="text-blue-700 font-semibold">Marketing Materials Banner</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="/images/banking-email.jpg" 
                  alt="Banking Email Templates" 
                  className="w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <p className="text-blue-600 font-semibold text-sm">Email Templates</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/banking-app.jpg" 
                  alt="Banking App Screens" 
                  className="w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📱</div>
                    <p className="text-blue-600 font-semibold text-sm">App Screens</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject === 'ecommerce-brand' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">E-Commerce Brand Design</h2>
              <button onClick={closeProjectModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-purple-600 font-semibold mb-6">Graphic Design | 2024</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  Brand identity and marketing materials for an online retail platform specializing in sustainable fashion. The project encompassed logo design, packaging concepts, social media templates, web graphics, and comprehensive brand guidelines. The brand needed to communicate eco-conscious values while maintaining a modern, fashionable aesthetic that would appeal to environmentally-aware consumers.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The visual identity emphasizes sustainability through earth-tone colors, natural textures, and clean typography while maintaining the premium feel expected in fashion retail.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Design System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/ecommerce-logo.png" 
                      alt="E-Commerce Logo Variations" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">🛍️</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/ecommerce-colors.png" 
                      alt="E-Commerce Sustainable Colors" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">🌿</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/ecommerce-packaging.png" 
                      alt="E-Commerce Packaging Design" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">�</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src="/images/ecommerce-social.png" 
                      alt="E-Commerce Social Media" 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-4xl">📱</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
              <img 
                src="/images/ecommerce-banner.jpg" 
                alt="E-Commerce Web Design" 
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-48 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛒</div>
                  <p className="text-pink-700 font-semibold">Web Design Banner</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="/images/ecommerce-tags.jpg" 
                  alt="E-Commerce Product Tags" 
                  className="w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-32 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🏷️</div>
                    <p className="text-pink-600 font-semibold text-sm">Product Tags</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/ecommerce-shipping.jpg" 
                  alt="E-Commerce Shipping Boxes" 
                  className="w-full h-32 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-32 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📦</div>
                    <p className="text-pink-600 font-semibold text-sm">Shipping Boxes</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject === 'design-gallery' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Flyer Design Gallery</h2>
              <button onClick={closeProjectModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="bg-gray-100 rounded-lg overflow-hidden group">
                      <div className="relative aspect-[3/4]">
                        <img 
                          src={`/images/gallery-${num}.jpg`} 
                          alt={`Design Work ${num}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                          <div className="text-center">
                            <div className="text-4xl mb-2">🖼️</div>
                            <p className="text-gray-700 font-semibold">Gallery {num}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-black">Design Areas</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-sm">
                    <div>
                      <h4 className="font-bold mb-1 text-black">Branding</h4>
                      <ul className="font-bold text-gray-700 space-y-0">
                        <li>• Logo Design</li>
                        <li>• Brand Identity</li>
                        <li>• Visual Systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Marketing</h4>
                      <ul className="font-bold text-gray-700 space-y-0">
                        <li>• Digital Graphics</li>
                        <li>• Print Materials</li>
                        <li>• Social Media</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Digital</h4>
                      <ul className="font-bold text-gray-700 space-y-0">
                        <li>• Web Design</li>
                        <li>• UI Elements</li>
                        <li>• Interactive Media</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-gray-40 p-4">
                  <p className="text-black text-sm font-medium">
                    There are many more flyer designs in my collection that couldn't fit in this gallery. Contact me to see more flyer and marketing materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
