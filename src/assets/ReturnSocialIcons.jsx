// import contact icons

import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiLogoInstagramAlt, BiSolidMessageDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

// import social icons
import { RiYoutubeFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";
import { BiLogoSnapchat, BiLogoSpotify, BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { useSelector } from "react-redux";

// import instagram from "./socialLink/instagram.png";
// import facebook from "./socialLink/facebook.png";
// import tiktok from "./socialLink/tiktok.png";
// import twitter from "./socialLink/twitter.png";

// import linkedin from "./socialLink/linkedin.png";
// import twitch from "./socialLink/twitch.png";
// import pinterest from "./socialLink/pinterest.png";
// import youtube from "./socialLink/youtube.png";

// import snapchat from "./socialLink/snapchat.png";
// import telegram from "./socialLink/telegram.png";
// import reddit from "./socialLink/reddit.png";

// import discord from "./socialLink/discord.png";
// import tumblr from "./socialLink/tumblr.png";

// import music icons
// import spotify from "./socialLink/spotify.png";

// import applemusic from "./socialLink/applemusic.png";
// import soundcloud from "./socialLink/soundcloud.png";

// import payment icons

// import cashapp from "./socialLink/cash.svg";
// import paypal from "./socialLink/paypal.png";

// import payment icons

// import website from "./socialLink/website.png";
// import calendly from "./socialLink/calendly.png";
// import custom from "./socialLink/customlink.png";

// import pinterest from './socialLink/pinterest.png'
// import youtube from './socialLink/twitter.png'

// let linkStyle = () => {
//   const linkEditmodal = useSelector(
//     (state) => state.modalHandeler.linkeditmodal
//   );
//   return linkEditmodal;
// };

export const contactIcons = [
  {
    name: "Call",
    title: "Call",
    img: <MdCall style={{ color: "white" }} />,
    placeholder: "Phone Number*",
  },
  {
    name: "Message",
    title: "Message",
    img: <BiSolidMessageDetail style={{ color: "white" }} />,
    placeholder: "Phone Number*",
  },
  {
    name: "Whatsapp",
    title: "Whatsapp",
    img: <RiWhatsappFill style={{ color: "white" }} />,
    placeholder: "Phone Number*",
  },
  {
    name: "Email",
    title: "Email",
    img: <MdEmail style={{ color: "white" }} />,
    placeholder: "Email*",
  },
];

export const socialIcons = [
  //   {
  //     name: "Instagram",
  //     title: "Instagram",
  //     img: instagram,
  //     placeholder: "Instagram Username*",
  //   },
  //   {
  //     name: "Facebook",
  //     title: "Facebook",
  //     img: facebook,
  //     placeholder: "Facebook Profile Link*",
  //   },
  //   {
  //     name: "Tiktok",
  //     title: "Tiktok",
  //     img: tiktok,
  //     placeholder: "Tiktok Username*",
  //   },
  //   {
  //     name: "Twitter",
  //     title: "Twitter",
  //     img: twitter,
  //     placeholder: "Twitter Username*",
  //   },

  //   {
  //     name: "Linkedin",
  //     title: "Linkedin",
  //     img: linkedin,
  //     placeholder: "Linkedin Profile Link*",
  //   },
  //   {
  //     name: "Twitch",
  //     title: "Twitch",
  //     img: twitch,
  //     placeholder: "Twitch Username*",
  //   },
  //   {
  //     name: "Pinterest",
  //     title: "Pinterest",
  //     img: pinterest,
  //     placeholder: "Pinterest Username*",
  //   },

  {
    name: "Youtube",
    title: "Youtube",
    img: <RiYoutubeFill style={{ color: "white" }} />,
    placeholder: "Youtube Chanel Url*",
  },
  {
    name: "Snapchat",
    title: "Snapchat",
    img: <BiLogoSnapchat style={{ color: "white" }} />,
    placeholder: "Snapchat Username*",
  },
  {
    name: "Telegram",
    title: "Telegram",
    img: <BiLogoTelegram style={{ color: "white" }} />,
    placeholder: "Telegram Number*",
  },
  {
    name: "Spotify",
    title: "Spotify",
    img: <BiLogoSpotify style={{ color: "white" }} />,
    placeholder: "Spotify link*",
  },
  {
    name: "SoundCloud",
    title: "SoundCloud",
    img: <ImSoundcloud style={{ color: "white" }} />,
    placeholder: "SoundCloud username*",
  },

  //   {
  //     name: "Reddit",
  //     title: "Reddit",
  //     img: reddit,
  //     placeholder: "reddit profile Url*",
  //   },
  {
    name: "Discord",
    title: "Discord",
    img: <BsDiscord style={{ color: "white" }} />,
    placeholder: "Discord server link*",
  },
  //   {
  //     name: "Tumblr",
  //     title: "Tumblr",
  //     img: tumblr,
  //     placeholder: "Tumblr Profile Link*",
  //   },
];

// export const media = [
//   {
//     name: "Spotify",
//     title: "Spotify",
//     img: spotify,
//     placeholder: "Spotify link*",
//   },
//   {
//     name: "Apple Music",
//     title: "AppleMusic",
//     img: applemusic,
//     placeholder: "Link to Apple Music*",
//   },
//   {
//     name: "SoundCloud",
//     title: "SoundCloud",
//     img: soundcloud,
//     placeholder: "SoundCloud username*",
//   },
// ];

// export const payment = [
//   {
//     name: "Cash App",
//     title: "CashApp",
//     img: cashapp,
//     placeholder: "Cash App username*",
//   },
//   {
//     name: "PayPal",
//     title: "PayPal",
//     img: paypal,
//     placeholder: "paypal.me link*",
//   },
// ];

// export const more = [
//   {
//     name: "Website",
//     title: "Website",
//     img: website,
//     placeholder: "Website link*",
//   },
//   {
//     name: "Calendly",
//     title: "Calendly",
//     img: calendly,
//     placeholder: "Calendly link*",
//   },
//   {
//     name: "Custom Link",
//     title: "Custom",
//     img: custom,
//     placeholder: "Custom link*",
//   },
// ];

export let returnIcons = (name, size) => {
  console.log(name);
  if (name === "Call") {
    return <MdCall style={{ color: "white", fontSize: `${size}px` }} />;
  } else if (name === "Message") {
    return (
      <BiSolidMessageDetail style={{ color: "white", fontSize: `${size}px` }} />
    );
  } else if (name === "Whatsapp") {
    return <RiWhatsappFill style={{ color: "white", fontSize: `${size}px` }} />;
  } else if (name === "Email") {
    return <MdEmail style={{ color: "white", fontSize: `${size}px` }} />;
  } else if (name === "Snapchat") {
    return <BiLogoSnapchat style={{ color: "white", fontSize: `${size}px` }} />;
  } else if (name === "Facebook") {
    return <FaFacebookF style={{ color: "white", fontSize: `${size}px` }} />;
  } else if (name === "Instagram") {
    return (
      <BiLogoInstagramAlt style={{ color: "white", fontSize: `${size}px` }} />
    );
  }
  // else if (name === "Twitter") {
  //   return twitter;
  // }
  // else if (name === "Twitch") {
  //   return twitch;
  // }
  else if (name === "Youtube") {
    return <RiYoutubeFill style={{ color: "white", fontSize: "50px" }} />;
  } else if (name === "Telegram") {
    return <BiLogoTelegram style={{ color: "white", fontSize: "50px" }} />;
  }
  // else if (name === "Pinterest") {
  //   return pinterest;
  // }
  // else if (name === "Tiktok") {
  //   return tiktok;
  // }
  // else if (name === "Linkedin") {
  //   return linkedin;
  // }
  // else if (name === "Reddit") {
  //   return reddit;
  // }
  else if (name === "Discord") {
    return <BsDiscord style={{ color: "white", fontSize: "50px" }} />;
  }
  // else if (name === "Tumblr") {
  //   return tumblr;
  // }
  else if (name === "Spotify") {
    return <BiLogoSpotify style={{ color: "white", fontSize: "50px" }} />;
  }
  // else if (name === "Apple Music") {
  //   return applemusic;
  // }
  else if (name === "SoundCloud") {
    return <ImSoundcloud style={{ color: "white", fontSize: "50px" }} />;
  }
  // else if (name === "Cash App") {
  //   return applemusic;
  // } else if (name === "PayPal") {
  //   return paypal;
  // } else if (name === "Calendly") {
  //   return calendly;
  // } else if (name === "Website") {
  //   return website;
  // } else if (name === "Custom") {
  //   return custom;
  // } else if (name === "CashApp") {
  //   return cashapp;
  // } else if (name === "AppleMusic") {
  //   return applemusic;
  // }
};
