/*
 * This is a configuration file for user data.
 * It contains information about the user, including their name, roles, email, social media links,
 * SEO optimization details, website URL, profile picture, and Google Analytics ID.
 * This data is used to personalize the website and improve its visibility on search engines.
 *
 * You can modify the values below to customize the user data for your website.
 * It is okay to commit this file to your repository.
 */

const config = {
  name: "Your Name", // Your name as it appears on the website
  roles: ["🎓 4th Year Student", "💻 Software Engineer", "🎮 Game Developer"], // List of 3 roles or professions
  email: "your.email@example.com", // Your email address
  profilePicture: "/images/ProfilePicture.png", // Path / URL to your profile picture
  socialLinks: {
    // Social media links
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },

  // Use this for SEO Optimization
  seo: {
    // A detailed description of your website for search engines.
    metaDescription:
      "Your Name - Web Developer, Designer, and Content Creator. Explore my portfolio and connect with me.",
    // A list of keywords related to your website for search engines.
    metaKeywords:
      "web developer, designer, content creator, portfolio, your name",
  },

  //   Website Information
  websiteURL: "https://yourwebsite.com", // Your website URL
  googleAnalyticsID: "G-XXXXXXXXXX", // Your Google Analytics ID (if applicable)
}

export default config
