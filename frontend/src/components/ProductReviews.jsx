import React, { useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

const ProductReviews = ({ reviews }) => {
  // Sample reviews data - in a real app, this would come from an API
  const sampleReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Beautiful bouquet! The flowers were fresh and lasted longer than expected. Highly recommend!',
      date: '2024-03-15',
      src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4,
      comment: 'Great quality flowers and fast delivery. The arrangement was exactly as shown in the picture.',
      date: '2024-03-10',
      image: 'https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 5,
      comment: 'The flowers were absolutely stunning! Perfect for my mother\'s birthday. She loved them!',
      date: '2024-03-05',
      image: 'https://images.pexels.com/photos/931178/pexels-photo-931178.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'David Wilson',
      rating: 4,
      comment: 'Very satisfied with the purchase. The flowers were fresh and the delivery was on time.',
      date: '2024-03-01',
      image: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'Jessica Brown',
      rating: 5,
      comment: 'The colors were vibrant and the arrangement was perfect. Will definitely order again!',
      date: '2024-02-28',
      image: 'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Robert Taylor',
      rating: 4,
      comment: 'Good quality flowers at a reasonable price. The delivery was prompt.',
      date: '2024-02-25',
      image='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    
  ];

  const displayReviews = reviews || sampleReviews;
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
      <div className="space-y-4">
        {displayReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                {imageErrors[review.id] ? (
                  <span>{getInitials(review.name)}</span>
                ) : (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(review.id)}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`w-4 h-4 ${
                            index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews; 