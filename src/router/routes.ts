import MyRoute from "./MyRoute";
import {ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DISH_ROUTE, MENU_ROUTE, PROFILE_ROUTE, REVIEWS_ROUTE} from "./consts";
import Admin from "../pages/admin";
import Auth from "../pages/auth";
import Basket from "../pages/basket";
import DishPage from "../pages/dishPage";
import Menu from "../pages/menu";
import Profile from "../pages/profile";
import Reviews from "../pages/reviews";

export const routes:MyRoute[] = [
    new MyRoute(ADMIN_ROUTE, Admin),
    new MyRoute(AUTH_ROUTE, Auth),
    new MyRoute(BASKET_ROUTE, Basket),
    new MyRoute(DISH_ROUTE, DishPage),
    new MyRoute(MENU_ROUTE, Menu),
    new MyRoute(PROFILE_ROUTE, Profile),
    new MyRoute(REVIEWS_ROUTE, Reviews)
]