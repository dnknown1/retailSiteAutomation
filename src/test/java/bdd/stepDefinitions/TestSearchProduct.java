package bdd.stepDefinitions;

import org.openqa.selenium.By;

import bdd.hooks.UseDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import retail.SearchProduct;

public class TestSearchProduct {
	public final By PRODUCT_MODEL_VALUE = By.xpath("//table/tbody/tr[1]/td[4]");
	public final By FILTER_PRODUCTS = By.id("button-filter");
	public final By PRODUCTS_TABLE = By.cssSelector("table.table.table-bordered.table-hover>tbody>*");
	public final By FILTER_NAME = By.name("filter_name");

	@Given("user is at PRODUCTS_PAGE")
	public void user_is_at_PRODUCTS_PAGE() {
		SearchProduct.plug(UseDriver.d);
		SearchProduct.loadProductPage();
	}

	@When("user clicks on FILTER_PRODUCT button")
	public void user_clicks_on_FILTER_PRODUCT_button() {
		SearchProduct.clickFilterProduct();
	}

	@Then("validate PRODUCTS_TABLE is displayed")
	public void validate_PRODUCTS_TABLE_is_displayed() {
		SearchProduct.validateNoFilterSearchPass();
	}

	@When("user provides FILTER_PRODUCT_NAME {string}")
	public void user_provides_FILTER_PRODUCT_NAME(String filterName) {
		SearchProduct.fillFilterName(filterName);
	}

	@Then("validate PRODUCT_MODEL_VALUE {string}")
	public void validate_PRODUCT_MODEL_VALUE(String model) {
		SearchProduct.validateProductModelValue(model);
	}
}
