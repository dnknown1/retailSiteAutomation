package bdd.stepDefinitions;

import bdd.hooks.UseDriver;
import cucumber.api.java.en.When;
import retail.EditProduct;

public class TestEditProduct {
	@When("user selects PRODUCT_TO_MODIFY")
	public void user_selects_PRODUCT_TO_MODIFY() {
		EditProduct.plug(UseDriver.d);
		EditProduct.selectfirstProduct();
	}

	@When("user clicks on EDIT_PRODUCT button")
	public void user_clicks_on_EDIT_PRODUCT_button() {
	    EditProduct.clickEditProduct();
	}

	@When("user updates PRODUCT_MODEL {string}")
	public void user_updates_PRODUCT_MODEL(String newModel) {
	    EditProduct.updateProductModelName(newModel);
	}

	@When("user provides PRODUCT_SEO {string}")
	public void user_provides_PRODUCT_SEO(String seo) {
	    EditProduct.fillProductSeo(seo);
	}
}
