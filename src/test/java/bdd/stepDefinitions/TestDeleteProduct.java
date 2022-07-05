package bdd.stepDefinitions;

import bdd.hooks.UseDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import retail.DeleteProduct;

public class TestDeleteProduct {
	@When("user clicks on DELETE_PRODUCT button")
	public void user_clicks_on_DELETE_PRODUCT_button() {
		DeleteProduct.plug(UseDriver.d);
		DeleteProduct.clickDeleteProduct();
	}

	@Then("validate NO_CHANGE")
	public void validate_NO_CHANGE() {
		DeleteProduct.validateNoChange();
	}

	@When("user accepts CONFORM_DELETE alert")
	public void user_accepts_CONFORM_DELETE_alert() {
		DeleteProduct.confirmDelete();
	}

	@When("user rejects CONFORM_DELETE alert")
	public void user_rejects_CONFORM_DELETE_alert() {
		DeleteProduct.rejectDelete();
	}
}
