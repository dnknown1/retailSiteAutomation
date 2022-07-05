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
	tags= {"@f1! or @f3! or @f2!n or @f4!"},
	//tags= {"@f4"},
	//tags={"@f0"},

	dryRun=false,
	plugin = {
		"pretty",
		"html:target/reports/html/crud",
		"json:target/reports/json/crud.json",
		"junit:target/reports/xml/crud.xml"
	}
)

public class Runner {}