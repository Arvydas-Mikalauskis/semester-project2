const testimonials = [
  {
    author: 'Emma Nord',
    content:
      "This online auction site has revolutionized the way I shop for antiques. The user interface is incredibly intuitive, and I always find what I'm looking for!",
    job: 'Antique Collector',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    author: 'Liam Eriksen',
    content:
      "As a frequent bidder, I appreciate the real-time updates and seamless bidding process. It's like being at a live auction without leaving home.",
    job: 'Professional Bidder',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    author: 'Olivia Solberg',
    content:
      "The customer service team is outstanding; they're always available to help with any issues. Plus, the variety of items is unmatched!",
    job: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    author: 'Noah Viken',
    content:
      "I've been using this auction site for months, and it's been a fantastic resource for finding rare collectibles and great deals.",
    job: 'Collector',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    author: 'Ava Thorsen',
    content:
      'The detailed item descriptions and high-quality photos make online bidding a breeze. I trust this site for all my auction needs.',
    job: 'Art Dealer',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
]

export function displayTestimonials(index) {
  const testimonial = testimonials[index]
  const testimonialContainer = document.getElementById('testimonials')

  testimonialContainer.innerHTML = `
        <div>
        
            <img src="${testimonial.avatar}" alt="avatar" class="w-20 h-20 rounded-full mx-auto mb-4" />
            <p class="text-grayBlue font-semibold mb-4">${testimonial.content}</p>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-4 mt-2" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>

            <p class="font-semibold italic">${testimonial.author}</p>
            <p class="text-grayBlue">${testimonial.job}</p> 
            
            
        </div>`
}

let currentIndex = 0
displayTestimonials(currentIndex)

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length
  displayTestimonials(currentIndex)
}

function previousTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
  displayTestimonials(currentIndex)
}

const nextTestimonial_btn = document.getElementById('nextTestimonial')
const prevTestimonial_btn = document.getElementById('prevTestimonial')

nextTestimonial_btn.addEventListener('click', nextTestimonial)
prevTestimonial_btn.addEventListener('click', previousTestimonial)
