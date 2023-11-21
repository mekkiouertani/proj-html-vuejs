import { reactive } from "vue";

export const store = reactive({
  navbarList: [
    {
      title: "Home",
      url: "#",
      id: 1,
      active: false,
    },
    {
      title: "About Us",
      url: "#",
      id: 2,
      active: false,
    },
    {
      title: "Vehicles",
      url: "#",
      id: 3,
      active: false,
    },
    {
      title: "Dealers",
      url: "#",
      id: 4,
      active: false,
    },
    {
      title: "Package",
      url: "#",
      id: 5,
      active: false,
    },
    {
      title: "Blog",
      url: "#",
      id: 6,
      active: false,
    },
    {
      title: "Contact",
      url: "#",
      id: 7,
      active: false,
    },
  ],
  FooterList: [
    {
      title: "MyAccount",
      listItem: ["My account", "Chechout", "Cart", "Packages", "AddCart"],
    },
    {
      title: "Quick Links",
      listItem: ["Home", "About Us", "Blog", "Contact", "Refund & Returns"],
    },
  ],
  footerCredits: [
    {
      title: " New Jersey, Usa",
      icon: "fa-solid fa-location-dot",
    },
    {
      title: " +1 (234) 567 89 10",
      icon: "fa-solid fa-phone",
    },
    {
      title: "example@example.com",
      icon: "fa-regular fa-envelope",
    },
  ],
  heroImages: [
    {
      img: "../../images/slider-autocar-5.jpg",
      title: "Buy and Sell Your Car At Its Value",
    },
    {
      img: "../../images/slider-autocar-6.jpg",
      title: "The Easiest Way To Buy And Sell Veichles",
    },
  ],
});
