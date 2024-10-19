
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Cadastros from "views/Cadastros.js";
import CadastroPlanos from "views/CadastroPlanos";
import CadastroComissoes from "views/CadastroComissoes";
import CadastroClientes from "views/CadastroClientes";
import CadastroConsultores from "views/CadastroConsultores";

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
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
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
    path: "/cadastros",
    name: "Cadastros",
    icon: "ni ni-folder-17 text-green",  // Escolha um ícone apropriado
    component: <Cadastros />,            // Componente que vamos criar
    layout: "/admin",
  },
  {
    path: "/cadastro-planos",
    name: "Cadastro de Planos",
    component: <CadastroPlanos />,
    layout: "/admin",
  },
  {
    path: "/cadastro-comissoes",
    name: "Cadastro de Comissões",
    component: <CadastroComissoes />,
    layout: "/admin",
  },
  {
    path: "/cadastro-clientes",
    name: "Cadastro de Clientes",
    component: <CadastroClientes />,
    layout: "/admin",
  },
  {
    path: "/cadastro-consultores",
    name: "Cadastro de Consultores",
    component: <CadastroConsultores />,
    layout: "/admin",
  },
  
];
export default routes;
