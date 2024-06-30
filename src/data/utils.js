import facebookIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import twitterIcon from "../images/icon-twitter.svg";
import youtubeIcon from "../images/icon-youtube.svg";

export const platformIcons = {
  Facebook: facebookIcon,
  Twitter: twitterIcon,
  Instagram: instagramIcon,
  YouTube: youtubeIcon,
};

export const borderStyle = {
  Facebook: "gradient-border-top-fb",
  Twitter: "gradient-border-top-tw",
  Instagram: "gradient-border-top-ig",
  YouTube: "gradient-border-top-yt",
};

export const handleLargeNumber = (count) => {
  if (count >= 1_000_000_000) {
    return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (count >= 10_000) {
    return (count / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return count.toString();
};
