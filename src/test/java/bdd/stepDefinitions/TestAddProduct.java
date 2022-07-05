package bdd.stepDefinitions;

import bdd.hooks.UseDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import retail.AddProduct;

public class TestAddProduct {
	//AddProduct a = new AddProduct(UseDriver.d);
	
	@Given("user is at DASHBOARD_PAGE")
	public void user_is_at_DASHBOARD_PAGE() {
		AddProduct.plug(UseDriver.d);
		AddProduct.loadDashboardPage();
	}

	@When("user clicks on TAGS_ICON")
	public void user_clicks_on_TAGS_ICON() {
		AddProduct.clickTagsIcon();
	}

	@When("user clicks on PRODUCTS_ICON")
	public void user_clicks_on_PRODUCTS_ICON() {
		AddProduct.clickProductsIcon();
	}

	@Then("user navigates to PRODUCTS_PAGE")
	public void user_navigates_to_PRODUCTS_PAGE() {
		AddProduct.isProductPage();
	}

	@When("user clicks on ADD_PRODUCT button")
	public void user_clicks_on_ADD_PRODUCT_button() {
		AddProduct.clickAddProduct();
	}

	@When("user clicks on SAVE_PRODUCT button")
	public void user_clicks_on_SAVE_PRODUCT_button() {
		AddProduct.clickSaveProduct();
	}

	@Then("validate ADD_PRODUCT fail")
	public void validate_ADD_PRODUCT_fail() {
		AddProduct.validateAddProductFail();
	}

	@When("user provides PRODUCT_NAME {string}")
	public void user_provides_PRODUCT_NAME(String name) {
		AddProduct.fillProductName(name);
	}

	@When("user provides PRODUCT_META_NAME {string}")
	public void user_provides_PRODUCT_META_NAME(String meta) {
		AddProduct.fillProductMetaName(meta);
	}

	@When("user clicks on DATA_TAB")
	public void user_clicks_on_DATA_TAB() {
		AddProduct.clickDataTab();
	}

	@When("user provides PRODUCT_MODEL {string}")
	public void user_provides_PRODUCT_MODEL(String data) {
		AddProduct.fillProductModel(data);
	}

	@Then("validate ADD_PRODUCT success")
	public void validate_ADD_PRODUCT_success() {
		AddProduct.validateAddProductSuccess();
	}
}
