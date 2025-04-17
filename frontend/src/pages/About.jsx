import React from 'react';
import { FaLeaf, FaHeart, FaHandshake, FaAward, FaShippingFast, FaRegSmile } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaLeaf className="text-4xl text-pink-500" />,
      title: "Sustainability",
      description: "We source our flowers responsibly and maintain eco-friendly practices throughout our operations."
    },
    {
      icon: <FaHeart className="text-4xl text-pink-500" />,
      title: "Quality",
      description: "Every bouquet is handcrafted with the freshest flowers, ensuring lasting beauty and fragrance."
    },
    {
      icon: <FaHandshake className="text-4xl text-pink-500" />,
      title: "Customer Service",
      description: "We're dedicated to providing exceptional service and creating memorable experiences."
    },
    {
      icon: <FaShippingFast className="text-4xl text-pink-500" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to ensure your flowers arrive fresh and on time."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Florist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const achievements = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: <FaRegSmile className="text-4xl text-pink-500" />
    },
    {
      number: "5K+",
      label: "Deliveries",
      icon: <FaShippingFast className="text-4xl text-pink-500" />
    },
    {
      number: "15+",
      label: "Awards",
      icon: <FaAward className="text-4xl text-pink-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Bringing Beauty to Your Doorstep
            </h1>
            <p className="text-xl animate-fade-in-delayed">
              We're passionate about creating beautiful floral arrangements that make every moment special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, FloraCart began with a simple mission: to bring the beauty and joy of flowers to people's lives. What started as a small local flower shop has grown into a trusted online destination for floral arrangements.
              </p>
              <p className="text-gray-600">
                Today, we work with local farmers and international suppliers to source the freshest flowers, creating beautiful arrangements that help you express your feelings and celebrate life's special moments.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-fade-in-up-${index}`}
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`text-center animate-fade-in-up-${index}`}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`text-center animate-fade-in-up-${index}`}
              >
                <div className="mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
                <p className="text-xl">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Ready to Experience the FloraCart Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Join thousands of satisfied customers who trust us to deliver beautiful flowers for their special moments.
          </p>
          <button 
            className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors animate-fade-in-delayed-2"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-up-0 {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        
        .animate-fade-in-up-1 {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-2 {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }
        
        .animate-fade-in-up-3 {
          animation: fadeInUp 0.8s ease-out 0.7s both;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About; 