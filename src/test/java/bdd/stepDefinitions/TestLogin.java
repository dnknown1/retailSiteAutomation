package bdd.stepDefinitions;

import bdd.hooks.UseDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import retail.Login;

public class TestLogin {
	
	@Given("user is at LOGIN_PAGE")
	public void user_is_at_LOGIN_PAGE() {
		Login.plugIn(UseDriver.d);
	    Login.loadLoginPage();
	}

	@When("user provides correct USERNAME {string}")
	public void user_provides_correct_USERNAME(String data) {
	    Login.fillUsername(data);
	}

	@When("user provides incorrect PASSWORD {string}")
	public void user_provides_incorrect_PASSWORD(String pass) {
		Login.fillPassword(pass);
	}

	@When("user clicks on LOGIN button")
	public void user_clicks_on_LOGIN_button() {
		Login.clickLogin();
	}

	@Then("validate LOGIN fail")
	public void validate_LOGIN_fail() {
		Login.validateLoginFail();
	}

	@When("user provides incorrect USERNAME {string}")
	public void user_provides_incorrect_USERNAME(String uname) {
		Login.fillUsername(uname);
	}

	@When("user provides correct PASSWORD {string}")
	public void user_provides_correct_PASSWORD(String pass) {
		Login.fillPassword(pass);
	}

	@Then("user navigates to DASHBOARD_PAGE")
	public void user_navigates_to_DASHBOARD_PAGE() {
		Login.validateDashBoardPage();
	}
}