package retail;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Login {
	private static WebDriver d;

	public final static String ROOT = "http://retailm1.upskills.in/admin/";
	public final static By USERNAME = By.name("username");
	public final static By PASSWORD	= By.name("password");
	public final static By LOGIN = By.cssSelector("button.btn.btn-primary");
	public final static By LOGIN_FAIL_ALERT = By.cssSelector("div.alert.alert-danger");
	public final static By DASHBOARD_PAGE_HEADING = By.xpath("//h1[contains(text(), 'Dashboard')]");

//	public Login(WebDriver d){
//		this.d = d;
//	}
//	
	public static void plugIn(WebDriver dr){
		d = dr;
	}

	public WebDriver plugOut(){
		return d;
	}
	private static void validateExists(By path){
		Assert.assertTrue(d.findElement(path).isDisplayed());
	}
	
	public static void loadLoginPage() {
		d.get(ROOT);
	}

	public static void fillUsername(String data) {
		d.findElement(USERNAME).sendKeys(data);
	}

	public static void fillPassword(String pass) {
		d.findElement(PASSWORD).sendKeys(pass);
	}

	public static void clickLogin() {
		d.findElement(LOGIN).click();
	}

	public static void validateLoginFail() {
		validateExists(LOGIN_FAIL_ALERT);
	}

	public static void validateDashBoardPage() {
		validateExists(DASHBOARD_PAGE_HEADING);
	}

}
