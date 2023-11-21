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
});
