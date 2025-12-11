import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // The teaser content shown when collapsed
  const TeaserContent = () => (
    <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-xl leading-relaxed text-gray-300">
            <strong>Unlock the full potential of your marketing data.</strong> In the digital age, understanding where your traffic comes from is not just a luxury—it's a necessity. This comprehensive guide explores the art and science of UTM tracking, providing you with the strategies needed to transform vague click data into actionable business intelligence.
        </p>
    </div>
  );

  const FullContent = () => (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="my-8 p-6 bg-gray-900/80 border border-gray-700/50 rounded-xl shadow-inner">
          <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Table of Contents</h3>
          <nav>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
                <li><a href="#introduction" className="hover:text-pink-400 transition-colors">1. Introduction to UTM Tracking</a></li>
                <li><a href="#what-are-utms" className="hover:text-pink-400 transition-colors">2. What Exactly Are UTM Parameters?</a></li>
                <li><a href="#five-core-params" className="hover:text-pink-400 transition-colors">3. The Five Core Parameters Explained</a></li>
                <li><a href="#how-it-works" className="hover:text-pink-400 transition-colors">4. The Mechanics: How UTMs Work</a></li>
                <li><a href="#why-crucial" className="hover:text-pink-400 transition-colors">5. Why UTMs are Crucial for ROI</a></li>
                <li><a href="#building-strategy" className="hover:text-pink-400 transition-colors">6. Building a Tracking Strategy</a></li>
                <li><a href="#best-practices" className="hover:text-pink-400 transition-colors">7. Golden Rules & Best Practices</a></li>
                <li><a href="#common-mistakes" className="hover:text-pink-400 transition-colors">8. Common Mistakes to Avoid</a></li>
                <li><a href="#advanced-tactics" className="hover:text-pink-400 transition-colors">9. Advanced Attribution Tactics</a></li>
                <li><a href="#mobile-apps" className="hover:text-pink-400 transition-colors">10. UTMs for Mobile Apps</a></li>
                <li><a href="#offline-tracking" className="hover:text-pink-400 transition-colors">11. Tracking Offline Campaigns</a></li>
                <li><a href="#data-governance" className="hover:text-pink-400 transition-colors">12. Data Governance & Hygiene</a></li>
                <li><a href="#ga4-migration" className="hover:text-pink-400 transition-colors">13. UTMs in the Era of GA4</a></li>
                <li><a href="#faq" className="hover:text-pink-400 transition-colors">14. Frequently Asked Questions</a></li>
                <li><a href="#conclusion" className="hover:text-pink-400 transition-colors">15. Conclusion</a></li>
            </ul>
          </nav>
      </div>

      <section id="introduction" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">1. Introduction to UTM Tracking</h3>
          <p className="mb-4 text-gray-300 text-lg leading-relaxed">
              In the vast, chaotic data-driven universe of digital marketing, success is rarely an accident. It is the result of precise execution and, more importantly, rigorous measurement. It's about understanding exactly what works, what falls flat, and why. This is where UTM tracking emerges as the marketer's most indispensable tool—a lighthouse in the fog of raw analytics data.
          </p>
          <p className="mb-4 text-gray-300 text-lg leading-relaxed">
              Without proper tracking, your analytics dashboard is little more than a vanity metric counter. You might see 10,000 visitors, but without knowing if they came from your expensive LinkedIn ad, your organic Facebook post, or your monthly newsletter, you cannot calculate Return on Ad Spend (ROAS) or Return on Investment (ROI). UTMs bridge this gap, connecting the dots between your marketing spend and your revenue.
          </p>
      </section>

      <section id="what-are-utms" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">2. What Exactly Are UTM Parameters?</h3>
          <p className="mb-4 text-gray-300 text-lg leading-relaxed">
              UTM stands for <strong>Urchin Tracking Module</strong>. The name is a nod to Urchin Software Corporation, the company acquired by Google in 2005 that laid the foundation for what we now know as Google Analytics.
          </p>
          <p className="mb-4 text-gray-300 text-lg leading-relaxed">
              At its core, a UTM parameter is a specific snippet of text (a query parameter) that you append to the end of a URL. When a user clicks on a link containing these parameters, the tags are sent back to your Google Analytics (or other analytics software) profile. This allows the software to strip out the parameters and categorize the session based on the data you provided.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
              Think of UTMs as digital luggage tags. Just as an airport baggage tag tells the system exactly where a suitcase came from, which flight it was on, and where it's going, a UTM tag tells your analytics tool exactly where a visitor came from, how they got there, and which campaign motivated their journey.
          </p>
      </section>

      <section id="five-core-params" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">3. The Five Core UTM Parameters Explained</h3>
          <p className="mb-6 text-gray-300 text-lg">To master tracking, you must master the five dimensions of UTMs:</p>
          
          <div className="space-y-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold text-white mb-2">1. Campaign Source (utm_source) - Required</h4>
                  <p className="text-gray-300"><strong>The "Where":</strong> Identifies the advertiser, site, publication, or platform sending traffic.</p>
                  <p className="text-gray-400 mt-2 text-sm">Examples: <code>google</code>, <code>facebook</code>, <code>newsletter</code>, <code>twitter</code>, <code>qr_code</code></p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-pink-500">
                  <h4 className="text-xl font-bold text-white mb-2">2. Campaign Medium (utm_medium) - Required</h4>
                  <p className="text-gray-300"><strong>The "How":</strong> The advertising or marketing medium. This is the broadest category.</p>
                  <p className="text-gray-400 mt-2 text-sm">Examples: <code>cpc</code> (cost-per-click), <code>email</code>, <code>social</code>, <code>organic</code>, <code>referral</code>, <code>display</code></p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-white mb-2">3. Campaign Name (utm_campaign) - Required</h4>
                  <p className="text-gray-300"><strong>The "Why":</strong> The individual campaign name, slogan, promo code, or product promotion.</p>
                  <p className="text-gray-400 mt-2 text-sm">Examples: <code>summer_sale</code>, <code>black_friday_2024</code>, <code>product_launch_v2</code></p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-white mb-2">4. Campaign Term (utm_term) - Optional</h4>
                  <p className="text-gray-300"><strong>The "What":</strong> Identify the paid search keywords. If you're manually tagging paid keyword campaigns, you should also use utm_term to specify the keyword.</p>
                  <p className="text-gray-400 mt-2 text-sm">Examples: <code>running+shoes</code>, <code>digital+marketing+agency</code></p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold text-white mb-2">5. Campaign Content (utm_content) - Optional</h4>
                  <p className="text-gray-300"><strong>The "Which":</strong> Used to differentiate similar content, or links within the same ad. Perfect for A/B testing.</p>
                  <p className="text-gray-400 mt-2 text-sm">Examples: <code>logolink</code> vs <code>textlink</code>, <code>blue_banner</code> vs <code>red_banner</code></p>
              </div>
          </div>
      </section>

      <section id="why-crucial" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">5. Why UTMs are Crucial for ROI</h3>
          <p className="mb-4 text-gray-300 text-lg leading-relaxed">
              If you aren't using UTM parameters, your traffic sources in Google Analytics likely look like a messy bucket of "Direct" or generic "Referral" traffic. This is a nightmare for attribution.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
              <li><strong>Prove Value:</strong> You can prove to your clients or boss exactly how much revenue the "Summer Email Blast" generated compared to the "Facebook Ad Campaign".</li>
              <li><strong>Budget Optimization:</strong> If you see that `utm_source=linkedin` has a 0.5% conversion rate but `utm_source=google` has a 3% conversion rate, you can shift your budget to the higher-performing channel.</li>
              <li><strong>A/B Testing:</strong> By using `utm_content`, you can test if a "Buy Now" button works better than a "Learn More" button in your emails.</li>
          </ul>
      </section>

      <section id="best-practices" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">7. Golden Rules & Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">ALWAYS Use Lowercase</h4>
                  <p className="text-gray-400">UTMs are case sensitive. `Email`, `email`, and `EMAIL` will show up as three different rows in Analytics. Stick to lowercase to keep data clean.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">NEVER Use Spaces</h4>
                  <p className="text-gray-400">Spaces break URLs. Use underscores (_) or dashes (-) instead. `summer_sale` is readable and safe.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">Keep it Consistent</h4>
                  <p className="text-gray-400">Create a spreadsheet or use a tool (like this one!) to maintain a consistent naming convention across your team.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">Don't Track Internal Links</h4>
                  <p className="text-gray-400">Never use UTMs for links on your own site pointing to other pages on your site. This restarts the session and ruins your data.</p>
              </div>
          </div>
      </section>

      <section id="faq" className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">14. Frequently Asked Questions (FAQ)</h3>
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-4">
              <h4 className="font-bold text-xl text-white mb-2">Do UTM parameters affect SEO?</h4>
              <p className="text-gray-300">Generally, no. Google knows that UTM parameters are for tracking and typically ignores them when indexing content. However, to be safe, use canonical tags on your pages to tell Google which version of the URL is the "master" version.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h4 className="font-bold text-xl text-white mb-2">Can users see the UTM parameters?</h4>
              <p className="text-gray-300">Yes, they are visible in the browser address bar. That's why you should avoid putting sensitive information (like user names or email addresses) in UTM tags.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h4 className="font-bold text-xl text-white mb-2">When should I use a URL shortener?</h4>
              <p className="text-gray-300">UTM-tagged links can get very long and ugly. If you are sharing the link on social media (like Twitter/X) or in a visible place, it's best to use a URL shortener (like Bit.ly) to hide the long parameters.</p>
            </div>
          </div>
      </section>

      <section id="conclusion" className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-6">15. Conclusion</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
            UTM parameters are the unsung heroes of digital marketing. They turn chaos into order and assumptions into facts. By adopting a disciplined approach to link tagging—using tools like Doodax to ensure consistency—you unlock a level of insight that can dramatically improve your marketing performance. Start tagging today, and let the data guide your way to success.
        </p>
      </section>
    </div>
  );

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden group">
      {/* Decorative background element for article container */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-600/20 transition-colors duration-500"></div>

      <article className="relative z-10">
        <header className="mb-6">
             <div className="inline-block px-3 py-1 bg-purple-900/50 border border-purple-500/30 rounded-full text-purple-300 text-xs font-bold tracking-wider uppercase mb-4">
                SEO & Analytics Guide
             </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight leading-tight mb-6">
                The Ultimate Guide to UTM Tracking: Mastering Digital Marketing Attribution
            </h2>
        </header>
        
        {/* Always visible teaser */}
        <TeaserContent />
        
        {/* Expandable full content */}
        {isExpanded && <FullContent />}
      </article>

      <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 focus:ring-offset-gray-900"
            aria-expanded={isExpanded}
          >
            <span className="mr-2">{isExpanded ? 'Read Less' : 'Read Full Guide'}</span>
            <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
      </div>
    </div>
  );
};

export default SeoArticle;