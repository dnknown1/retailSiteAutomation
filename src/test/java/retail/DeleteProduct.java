package retail;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class DeleteProduct {
	private static WebDriver d = null;
	private static long delay = 5;

	public final static By DELETE_PRODUCT = By.xpath("//button[@data-original-title='Delete']");
	public final static By PRODUCTS_PAGE = By.xpath("//h1[contains(text(), 'Products')]");
	
	private static Alert waitForAlert(long ms){
		d.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		return d.switchTo().alert();
	}
	
	public static void plug(WebDriver d2){d=d2;}
	
	public static void validateNoChange(){
		Assert.assertTrue(d.findElement(PRODUCTS_PAGE).isDisplayed());
	}
	
	public static void confirmDelete(){
		waitForAlert(delay).accept();
		d.switchTo().defaultContent();
	}
	
	public static void rejectDelete(){
		waitForAlert(delay).dismiss();
		d.switchTo().defaultContent();
	}

	public static void clickDeleteProduct() {
		d.findElement(DELETE_PRODUCT).click();
	}
}
