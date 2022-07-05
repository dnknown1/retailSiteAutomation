package retail;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EditProduct {
	private static WebDriver d;
	public static By PRODUCT_SEO = By.name("keyword");
	public static By EDIT_PRODUCT_BTN = By.xpath("//a[@data-original-title='Edit']");
	public static By PRODUCT_TO_MODIFY = By.xpath("//table/tbody/tr[1]/td[1]/input");
	public static By PRODUCT_MODEL = By.id("input-model");
	public static void plug(WebDriver d2) {d=d2;}

	public static void selectfirstProduct() {
		d.findElement(PRODUCT_TO_MODIFY).click();
	}

	public static void clickEditProduct() {
		d.findElement(EDIT_PRODUCT_BTN).click();
	}
	
	public static void updateProductModelName(String newModel) {
		d.findElement(PRODUCT_MODEL).clear();
		d.findElement(PRODUCT_MODEL).sendKeys(newModel);
	}

	public static void fillProductSeo(String seo) {
		d.findElement(PRODUCT_SEO).clear();
		d.findElement(PRODUCT_SEO).sendKeys(seo);		
	}

}
