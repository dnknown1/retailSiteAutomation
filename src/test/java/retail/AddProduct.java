package retail;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import dataStore.Consts;

public class AddProduct {
	private static WebDriver d; 
	public final By DASHBOARD_PAGE = By.xpath("//h1[contains(text(), 'Dashboard')]");
	public final static By TAGS_ICON = By.cssSelector("a>i.fa.fa-tags.fw");
	public final static By PRODUCTS_PAGE = By.xpath("//h1[contains(text(), 'Products')]");
	public final static By PRODUCTS_ICON = By.xpath("//a[contains(text(), 'Products')]");
	public final static By ADD_PRODUCT = By.xpath("//a[@data-original-title='Add New']");
	public final static By SAVE_PRODUCT = By.xpath("//button[@data-original-title='Save']");
	public final static By PRODUCT_NAME = By.id("input-name1");
	public final static By PRODUCT_MODEL = By.id("input-model");
	public final static By PRODUCT_META_NAME = By.id("input-meta-title1");
	public final static By ADD_PRODUCT_DATA_TAB = By.xpath("//a[contains(text(),'Data')]");
	public final static By MOD_PRODUCT_SUCCESS = By.cssSelector("div.alert.alert-success");
	public final static By MOD_PRODUCT_FAIL = By.cssSelector("div.alert.alert-danger");

	public AddProduct(WebDriver d2){d=d2;}
	
	public static void loadDashboardPage() {
		Login.plugIn(d);
		Login.loadLoginPage();
		Login.fillUsername(Consts.ADMIN_UNAME);
		Login.fillPassword(Consts.ADMIN_UPASS);
		Login.clickLogin();
	}

	public static void clickTagsIcon() {
		d.findElement(TAGS_ICON).click();
	}

	public static void clickProductsIcon() {
		d.findElement(PRODUCTS_ICON).click();
	}

	public static void isProductPage() {
		Assert.assertTrue(d.findElement(PRODUCTS_PAGE).isDisplayed());
	}

	public static void clickAddProduct() {
		d.findElement(ADD_PRODUCT).click();
	}

	public static void clickSaveProduct() {
		d.findElement(SAVE_PRODUCT).click();
		
	}

	public static void validateAddProductFail() {
		Assert.assertTrue(d.findElement(MOD_PRODUCT_FAIL).isDisplayed());
	}

	public static void fillProductName(String name) {
		d.findElement(PRODUCT_NAME).sendKeys(name);
	}

	public static void fillProductMetaName(String meta) {
		d.findElement(PRODUCT_META_NAME).sendKeys(meta);
	}

	public static void clickDataTab() {
		d.findElement(ADD_PRODUCT_DATA_TAB).click();
	}

	public static void fillProductModel(String data) {
		d.findElement(PRODUCT_MODEL).sendKeys(data);
	}

	public static void validateAddProductSuccess() {
		Assert.assertTrue(d.findElement(MOD_PRODUCT_SUCCESS).isDisplayed());
	}

	public static void plug(WebDriver d2) {
		d = d2;
	}

}
