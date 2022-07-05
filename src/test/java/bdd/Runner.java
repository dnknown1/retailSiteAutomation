package bdd;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
	features = "src/test/java/bdd/features",
    glue ={"bdd.stepDefinitions", "bdd.hooks"},
	monochrome=true,
	//tags= {"@f1! or @f3!"},
	//tags= {"@f2!n"},
	//tags= {"@f4"},
	//tags={"@f0"},

	dryRun=false,
	plugin = {
		"pretty",
		"html:target/reports/html/testAsync",
		"json:target/reports/json/testAsync.json",
		"junit:target/reports/xml/testAsync.xml"
	}
)

public class Runner {}