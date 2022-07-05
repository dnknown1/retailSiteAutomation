package retail;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import bdd.hooks.UseDriver;

public class SearchProduct {
	private static WebDriver d;
	public final static By PRODUCT_MODEL_VALUE = By.xpath("//table/tbody/tr[1]/td[4]");
	public final static By FILTER_BUTTON = By.id("button-filter");
	public final static By PRODUCTS_TABLE = By.cssSelector("table.table.table-bordered.table-hover>tbody>*");
	public final static By FILTER_NAME = By.name("filter_name");
	
	public static void plug(WebDriver d2) {
		d = d2;
	}

	public static void loadProductPage(){
		AddProduct.plug(UseDriver.d);
		AddProduct.loadDashboardPage();
		AddProduct.clickTagsIcon();
		AddProduct.clickProductsIcon();
		AddProduct.isProductPage();
	}
	
	public static void validateProductModelValue(String model) {
		d.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		Assert.assertTrue(
				d.findElement(PRODUCT_MODEL_VALUE)
				.getText().contains(model)
		);
	}

	public void validateFilterSearchSuccess(String data) {
		d.findElement(PRODUCT_MODEL_VALUE).getText().contains(data);
	}

	public static void validateNoFilterSearchPass() {
		Assert.assertNotNull(d.findElements(PRODUCTS_TABLE));
	}

	public static void clickFilterProduct() {
		d.findElement(FILTER_BUTTON).click();
	}

	public static void fillFilterName(String filterName) {
		d.findElement(FILTER_NAME).sendKeys(filterName);
	}
	
}
