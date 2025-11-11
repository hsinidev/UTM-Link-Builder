import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ArticleContent = () => (
    <>
      <div className="my-8 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold" id="toc">Table of Contents</h3>
          <ul className="list-disc list-inside mt-4 space-y-2">
              <li><a href="#what-are-utms">What Exactly Are UTM Parameters?</a></li>
              <li><a href="#five-core-params">The Five Core UTM Parameters Explained</a></li>
              <li><a href="#how-utms-work">How UTMs Work with Google Analytics</a></li>
              <li><a href="#why-utm-is-crucial">Why Consistent UTM Tagging is Crucial for ROI</a></li>
              <li><a href="#best-practices">Best Practices for a Bulletproof UTM Naming Convention</a></li>
              <li><a href="#common-mistakes">Common Mistakes in URL Tagging and How to Avoid Them</a></li>
              <li><a href="#advanced-strategies">Advanced UTM Strategies for Granular Insights</a></li>
              <li><a href="#data-table-example">Data Table: How UTMs Segment Traffic</a></li>
              <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
          </ul>
      </div>

      <h3 id="what-are-utms" className="text-3xl font-bold mt-12">What Exactly Are UTM Parameters?</h3>
      <p>At its core, a UTM parameter is a tag. Think of it like a digital label you attach to a link. When a user clicks on this tagged link, the labels are sent directly to your analytics platform, most commonly Google Analytics. This allows the platform to categorize that specific click with incredible precision. Instead of seeing a vague traffic source like "Direct" or "t.co" (Twitter), you can see that the click came from your "Summer Sale 2025" campaign, specifically from the "cpc" (cost-per-click) ad on "google," targeting the keyword "running shoes," and it was the "blue_banner_ad" variant that was clicked.</p>
      <p>This level of detail is a game-changer. It illuminates the entire customer journey, from the initial click to the final conversion. Without UTMs, much of your marketing data would be murky, making it nearly impossible to attribute success accurately. You'd be flying blind, unable to discern which of your efforts are truly driving results. UTMs bring clarity and precision, turning your analytics from a simple traffic counter into a strategic business intelligence tool.</p>

      <h3 id="five-core-params" className="text-3xl font-bold mt-12">The Five Core UTM Parameters Explained</h3>
      <p>There are five standard UTM parameters that you can use to tag your URLs. While three are typically considered essential, using all five provides the most comprehensive data possible.</p>
      <ol className="list-decimal list-inside space-y-4">
        <li><strong>utm_source (Required):</strong> This identifies the source of your traffic—the specific platform or website that sent the visitor to you. It answers the question, "Where is the traffic coming from?"
            <ul>
                <li>Examples: <code>google</code>, <code>facebook</code>, <code>newsletter_september</code>, <code>linkedin</code>, <code>bing</code></li>
            </ul>
        </li>
        <li><strong>utm_medium (Required):</strong> This parameter describes the marketing medium or channel. It answers the question, "How did the traffic get here?"
            <ul>
                <li>Examples: <code>cpc</code> (for paid ads), <code>email</code>, <code>social</code>, <code>organic</code>, <code>affiliate</code>, <code>display</code></li>
            </ul>
        </li>
        <li><strong>utm_campaign (Required):</strong> This is used to identify a specific campaign, promotion, or strategic initiative. It helps you group all activities related to a single marketing push. It answers, "Why is the traffic coming?"
            <ul>
                <li>Examples: <code>summer_sale_2025</code>, <code>product_launch_q4</code>, <code>brand_awareness_video</code></li>
            </ul>
        </li>
        <li><strong>utm_term (Optional):</strong> This parameter is primarily used for paid search campaigns to track the specific keywords that triggered an ad. It can also be used in other contexts to identify specific links within a piece of content.
            <ul>
                <li>Examples: <code>running_shoes</code>, <code>digital_marketing_tools</code> (for PPC keywords)</li>
            </ul>
        </li>
        <li><strong>utm_content (Optional):</strong> This is used to differentiate between links or ads that point to the same URL within the same campaign. It's perfect for A/B testing. For example, if you have two different call-to-action buttons in an email, you can use `utm_content` to see which one performs better.
            <ul>
                <li>Examples: <code>blue_banner_ad</code>, <code>text_link_footer</code>, <code>image_header_v1</code></li>
            </ul>
        </li>
      </ol>

      <h3 id="how-utms-work" className="text-3xl font-bold mt-12">How UTMs Work with Google Analytics</h3>
      <p>When a user clicks a UTM-tagged URL, your web server registers the click, and the JavaScript tracking code for Google Analytics (or another analytics tool) fires on your website. This code reads the URL parameters and sends them as part of the pageview hit to Google's servers. Google Analytics then processes this data and populates it into your campaign reports.</p>
      <p>You can find this data in Google Analytics under the `Acquisition` > `Campaigns` > `All Campaigns` report. Here, you'll see your campaigns neatly organized by the `utm_campaign` name you defined. You can then add secondary dimensions for Source, Medium, Term, and Content to drill down into the data. This allows you to compare the performance of your Facebook CPC ads against your Google CPC ads for the same "summer_sale_2025" campaign, and even see which specific ad creative (`utm_content`) drove the most conversions. This is the magic of UTMs: transforming a chaotic stream of clicks into an organized, actionable dataset.</p>

      <h3 id="why-utm-is-crucial" className="text-3xl font-bold mt-12">Why Consistent UTM Tagging is Crucial for ROI</h3>
      <p>Inconsistent tagging is the enemy of clean data. Imagine one team member tags a source as `Facebook`, another uses `facebook.com`, and a third uses `FB`. In your analytics, these will show up as three separate sources, fragmenting your data and making it impossible to get an accurate picture of Facebook's overall performance. This is why establishing and enforcing a strict UTM naming convention is non-negotiable for any serious marketing team.</p>
      <p>A consistent framework ensures that all data is aggregated correctly, providing a single source of truth. When you can accurately attribute conversions and revenue to specific campaigns, sources, and mediums, you can calculate a precise ROI for each marketing activity. This empowers you to:</p>
      <ul className="list-disc list-inside">
          <li><strong>Justify Marketing Spend:</strong> Show stakeholders exactly which campaigns are generating revenue.</li>
          <li><strong>Optimize Budgets:</strong> Shift ad spend from underperforming channels to high-performing ones.</li>
          <li><strong>Improve Strategies:</strong> Understand which messaging, offers, and creatives resonate most with your audience.</li>
          <li><strong>Personalize User Experiences:</strong> Gain insights into how different segments behave, allowing for more targeted future campaigns.</li>
      </ul>

      <h3 id="best-practices" className="text-3xl font-bold mt-12">Best Practices for a Bulletproof UTM Naming Convention</h3>
      <p>To avoid data fragmentation, follow these universal best practices:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Be Consistent:</strong> Create a shared document or spreadsheet that outlines your naming conventions and make it accessible to everyone on your team.</li>
        <li><strong>Use Lowercase:</strong> UTM parameters are case-sensitive. `Google` and `google` will be tracked as separate sources. Stick to lowercase to prevent issues.</li>
        <li><strong>Use Underscores or Dashes, Not Spaces:</strong> Spaces in URLs can cause encoding issues. Use `summer_sale` or `summer-sale` instead of `summer sale`. Underscores are generally preferred.</li>
        <li><strong>Keep it Simple and Descriptive:</strong> Your tags should be easy to understand at a glance. `newsletter_2025_09_2_promo` is much clearer than `nl_25_9_2_p`.</li>
        <li><strong>Use a URL Builder Tool:</strong> Manually creating UTM-tagged URLs is prone to error. Use a reliable tool (like this one!) to ensure they are formatted correctly every time.</li>
      </ol>

      <h3 id="common-mistakes" className="text-3xl font-bold mt-12">Common Mistakes in URL Tagging and How to Avoid Them</h3>
      <ul className="list-disc list-inside space-y-3">
          <li><strong>Tagging Internal Links:</strong> Never use UTM parameters on links within your own website (e.g., from your homepage to your blog). Doing so will overwrite the original session data, making it seem like the user started a new session from an "internal" campaign, which corrupts your attribution data.</li>
          <li><strong>Using Different Cases:</strong> As mentioned, `Facebook` and `facebook` are not the same. Enforce lowercase across the board.</li>
          <li><strong>Mixing Up Source and Medium:</strong> A common error is putting the medium (e.g., `cpc`) in the source field and vice-versa. Remember: Source is the 'where' (google), and Medium is the 'how' (cpc).</li>
          <li><strong>Being Too Vague or Overly Complex:</strong> Find a middle ground. `ad1` is too vague. `blue_button_with_white_text_and_drop_shadow_promo` is too complex. `blue_button_promo` is just right.</li>
          <li><strong>Not Tagging Everything:</strong> Every link you share that you have control over should be tagged. This includes links in emails, social media profiles, press releases, and paid ad campaigns.</li>
      </ul>

      <h3 id="advanced-strategies" className="text-3xl font-bold mt-12">Advanced UTM Strategies for Granular Insights</h3>
      <p>Once you've mastered the basics, you can leverage UTMs for more sophisticated tracking:</p>
      <ul className="list-disc list-inside space-y-3">
          <li><strong>Tracking Influencer Marketing:</strong> Use the influencer's name as the `utm_source` and 'influencer' as the `utm_medium`. The `utm_campaign` can be the product they are promoting.</li>
          <li><strong>Offline Campaign Tracking:</strong> Use QR codes or vanity URLs on printed materials (flyers, business cards) that redirect to a UTM-tagged URL. You can use a source like `flyer` and medium `print`.</li>
          <li><strong>Email Signature Tracking:</strong> Track how many leads or website visits are generated from your team's email signatures by using a standard UTM link for everyone.</li>
          <li><strong>A/B Testing with `utm_content`:</strong> Test everything from ad copy and images to button colors and placements by assigning a unique `utm_content` tag to each variation.</li>
      </ul>
      
      <h3 id="data-table-example" className="text-3xl font-bold mt-12">Data Table: How UTMs Segment Traffic in Analytics</h3>
      <p>The table below illustrates how different UTM combinations provide distinct, valuable data segments within your analytics platform. This demonstrates the power of a well-structured UTM strategy.</p>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left">
            <thead className="bg-gray-800 text-gray-300">
                <tr>
                    <th className="p-3">Source</th>
                    <th className="p-3">Medium</th>
                    <th className="p-3">Campaign</th>
                    <th className="p-3">Content</th>
                    <th className="p-3">Resulting Insight</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-900/50">
                    <td className="p-3">google</td>
                    <td className="p-3">cpc</td>
                    <td className="p-3">summer_sale</td>
                    <td className="p-3">video_ad_15s</td>
                    <td className="p-3">Performance of the 15-second video ad on Google's paid search network for the summer sale.</td>
                </tr>
                <tr>
                    <td className="p-3">facebook</td>
                    <td className="p-3">social</td>
                    <td className="p-3">summer_sale</td>
                    <td className="p-3">carousel_ad_lifestyle</td>
                    <td className="p-3">Performance of the organic lifestyle carousel ad on Facebook for the same campaign.</td>
                </tr>
                <tr className="bg-gray-900/50">
                    <td className="p-3">newsletter</td>
                    <td className="p-3">email</td>
                    <td className="p-3">summer_sale</td>
                    <td className="p-3">footer_link</td>
                    <td className="p-3">Clicks on the footer link within the promotional email about the summer sale.</td>
                </tr>
                 <tr>
                    <td className="p-3">linkedin</td>
                    <td className="p-3">social</td>
                    <td className="p-3">webinar_promo</td>
                    <td className="p-3">profile_banner</td>
                    <td className="p-3">Traffic generated from the banner on a company LinkedIn profile promoting a webinar.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h3 id="faq" className="text-3xl font-bold mt-12">Frequently Asked Questions (FAQ)</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-xl">What are UTM parameters?</h4>
          <p>UTM (Urchin Tracking Module) parameters are five simple tags that you can add to the end of a URL to track the effectiveness of your online marketing campaigns. They provide Google Analytics and other tools with detailed information about where your traffic is coming from, which campaign it's associated with, and more.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Why is UTM tracking important?</h4>
          <p>UTM tracking is crucial because it provides granular data on your traffic sources, allowing you to measure the ROI of specific campaigns. It helps you understand which channels (social, email, CPC), campaigns, and even specific ads are driving the most traffic and conversions, enabling data-driven marketing decisions.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Are all five UTM parameters required?</h4>
          <p>No, not all five are required, but Source, Medium, and Campaign are highly recommended for meaningful tracking. Term and Content are optional and used for more specific tracking, such as paid keywords or A/B testing different ad creatives.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Can UTM parameters hurt my SEO?</h4>
          <p>No, UTM parameters do not directly impact SEO. Search engines like Google are smart enough to recognize them as tracking parameters and typically ignore them for ranking purposes. They process the base URL (the part before the '?') for indexing. Using them correctly will not result in duplicate content penalties.</p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Where do I see UTM data in Google Analytics 4 (GA4)?</h4>
          <p>In GA4, you can find UTM data by navigating to `Reports` > `Acquisition` > `Traffic acquisition`. Here, you can change the primary dimension to 'Session campaign' to see your `utm_campaign` data. You can also add secondary dimensions for 'Session source / medium' and other UTM-related fields to analyze the data further.</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-10">
      <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-purple-400 prose-headings:to-pink-500 prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-strong:text-gray-100">
        <h2 className="text-4xl font-extrabold" id="main-title">The Ultimate Guide to UTM Tracking: Mastering Digital Marketing Analytics and Campaign Attribution</h2>
        
        <p>In the vast, data-driven universe of digital marketing, success is not just about creating compelling content or running eye-catching ads. It's about understanding what works, what doesn't, and why. This is where UTM tracking emerges as a marketer's most indispensable tool.</p>
        <p>UTMs, or Urchin Tracking Modules, are simple snippets of code added to URLs that transform them into powerful data-gathering instruments. They provide the granular insights needed to measure campaign effectiveness, justify marketing spend, and optimize strategies for maximum return on investment (ROI). This comprehensive guide will take you on a deep dive into the world of UTM tracking, from the fundamental principles to advanced strategies that can revolutionize your approach to digital marketing analytics.</p>
        
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ArticleContent />
        </div>
      </article>

      <div className="mt-8 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg py-2.5 px-8 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            aria-expanded={isExpanded}
            aria-controls="article-content"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
      </div>
    </div>
  );
};

export default SeoArticle;