class categoryMenuComponent {
    categoryMenuLink(linkText) {
        return $$(`//a[contains(text(), '${linkText}')]`);
    }
}

export default new categoryMenuComponent();