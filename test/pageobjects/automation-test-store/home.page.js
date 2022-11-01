import BasePage from "./base.page";
import CategoryMenuComponent from "./components/CategoryMenu.comp";

class HomePage extends BasePage {
    open() {
        return super.open("")
    }

    get categoryMenuComponent() {
        return CategoryMenuComponent;
    }
}

export default new HomePage();