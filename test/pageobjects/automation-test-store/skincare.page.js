import BasePage from "../page";
import itemComp from "./components/item.comp";

class SkinCare extends BasePage {
    get itemComp() {
        return itemComp;
    }
}

export default new SkinCare();