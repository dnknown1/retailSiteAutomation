package bdd.hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import dataStore.Consts;

public class UseDriver {
	public static WebDriver d;

	@Before
	public void setup(){
		System.setProperty(Consts.CD_KEY, Consts.CD_PATH);
		d = new ChromeDriver();
	}
	
	@After
	public void tearDown(){
		d.close();
	}
		
	public static WebDriver d(){
		return d;
	};
}
