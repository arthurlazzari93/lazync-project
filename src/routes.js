
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ClientsList from 'views/ClientsList.js';
import PlanosList from 'views/PlanosList.js';
import ConsultoresList from "views/ConsultoresList.js";
import VendasList from "views/VendasList";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },



  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: "ni ni-single-02 text-blue",  // Ícone de usuário
    component: <ClientsList />,
    layout: "/admin",
  },
  {
    path: "/planos",
    name: "Planos",
    icon: "ni ni-archive-2 text-blue",  // Escolha um ícone adequado
    component: <PlanosList />,
    layout: "/admin",
  },
  {
    path: "/consultores",
    name: "Consultores",
    icon: "ni ni-single-02 text-yellow",
    component: <ConsultoresList />,
    layout: "/admin",
  },
  {
    path: "/vendas",
    name: "Cadastro Vendas",
    icon: "ni ni-single-02 text-yellow",
    component: <VendasList />,
    layout: "/admin",
  }

  
];
export default routes;
