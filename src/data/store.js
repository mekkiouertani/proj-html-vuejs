import { reactive } from "vue";

export const store = reactive({
  isHidden: true,
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
  cardSearchMain: [
    {
      img: "../../images/cabrio.jpg",
      name: "Cabrio",
      listings: 3,
    },
    {
      img: "../../images/coupe.jpg",
      name: "Cabrio",
      listings: 0,
    },
    {
      img: "../../images/hatchback.jpg",
      name: "Hatchback",
      listings: 2,
    },
    {
      img: "../../images/pickup.jpg",
      name: "Pick Up",
      listings: 0,
    },
    {
      img: "../../images/sedan.jpg",
      name: "Sedan",
      listings: 3,
    },
    {
      img: "../../images/suv.jpg",
      name: "Suv",
      listings: 3,
    },
  ],
  topMainSelect: [
    {
      title: "All Categories",
      options: ["Cabrio", "Coupe", "Hatchback", "Pick Up", "Sedan", "Suv"],
    },
    {
      title: "Brand",
      options: [
        "Audi",
        "BMW",
        "Ford",
        "Hyndai",
        "Opel",
        "Seat",
        "Skoda",
        "Toyota",
        "Volswagen",
      ],
    },
    {
      title: "Fuel Type",
      options: ["Diesel", "Electric", "Gasoline", "LPG"],
    },
    {
      title: "Transmission",
      options: ["Automatic", "Manual", "Semiautomatic", "Touch"],
    },
    {
      title: "Status",
      options: ["2nd Hand", "By Owner", "From the Gallery", "New"],
    },
  ],
  carsShowcase: [
    {
      img: "../../images/carsShowcase/bmw-m9.jpg",
      name: "BMW",
      model: "M9",
      type: "Cabrio",
      price: 34,
      fuel: "Electric",
    },
    {
      img: "../../images/carsShowcase/bmw-m8.jpg",
      name: "BMW",
      model: "M8",
      type: "Cabrio",
      price: 34,
      fuel: "Diesel",
    },
    {
      img: "../../images/carsShowcase/bmw-4.jpg",
      name: "BMW",
      model: "4",
      type: "Cabrio",
      price: 34,
      fuel: "Gasoline",
    },
    {
      img: "../../images/carsShowcase/seat-ibiza.jpg",
      name: "Seat",
      model: "Ibiza",
      price: 27,
      type: "Hatchback",
      fuel: "Electric",
    },
    {
      img: "../../images/carsShowcase/seat-arona.jpg",
      name: "Seat",
      model: "Arona",
      type: "SUV",
      price: 68,
      fuel: "Gasoline",
    },
    {
      img: "../../images/carsShowcase/vol-tiago.jpg",
      name: "Wolswagen",
      model: "Taigo",
      type: "SUV",
      price: 52,
      fuel: "Electric",
    },
    {
      img: "../../images/carsShowcase/t-cross.jpg",
      name: "Wolswagen",
      model: "T-Cross",
      type: "SUV",
      price: 47,
      fuel: "Diesel",
    },
    {
      img: "../../images/carsShowcase/vol-passat.jpg",
      name: "Wolswagen",
      model: "Passat",
      type: "Sedan",
      price: 32,
      fuel: "Diesel",
    },
  ],
  user: [
    {
      id: "1",
      name: "Christina",
      img: "../../images/testimonial2-1.png",
      text: "One of the quality websites I apply to rent a car. There are hundreds of different tools.",
    },
    {
      id: "2",
      name: "Adam",
      img: "../../images/man1.png",
      text: " We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
    },
    {
      id: "3",
      name: "Elizabeth",
      img: "../../images/testimonial4-1.png",
      text: " A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.",
    },
    {
      id: "4",
      name: "Robert",
      img: "../../images/man2.png",
      text: "I was trying to sell my car. And I put it here and sold it for more than it was worth.",
    },
  ],
  cardCars: [
    {
      img: "../../images/news-autocar-1-300x180.jpg",
      title: "How solid is Audi?",
      text: "According to Euro NCAP data with different test organizations, there",
    },
    {
      img: "../../images/news-autocar-6-300x180.jpg",
      title: "What Brand is Skoda?",
      text: "Skoda is one of the leading automotive manufacturers on the",
    },
  ],

  /*  formData: {
    name: "",
    model: "",
    type: "",
    fuel: "",
  }, */
});
