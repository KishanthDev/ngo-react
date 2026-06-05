import { DraggableScroll } from '../ui/DraggableScroll';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  { title: "Fight starvation with Mission: Feed the Hungry", date: "7 June 2024", image: "/assets/feedhungry.jpeg" },
  { title: "Make a birthday donation to an NGO in your loved one’s name", date: "19 March 2024", image: "/assets/birthday.jpeg" },
  { title: "Your monthly donation can help children & elders in need", date: "24 April 2024", image: "/assets/oldagehome.jpeg" }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="w-full bg-[#f8f8f8] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Blog</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Packed with information, initiatives and impact of the social sector
            </p>
            <button className="px-6 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="relative">
            {/* Implemented seamless horizontal grabbing */}
            <DraggableScroll className="gap-6 pb-4">
              {BLOG_POSTS.map((blog, idx) => (
                <Link to="#" key={idx} className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-sm snap-start block shrink-0">
                  <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover pointer-events-none" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">{blog.title}</h3>
                    <p className="text-sm text-gray-500 mt-3">{blog.date}</p>
                  </div>
                </Link>
              ))}
            </DraggableScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
};