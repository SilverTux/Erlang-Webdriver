/**
 * Parse source and update TestCase. Throw an exception if any error occurs.
 *
 * @param testCase TestCase to update
 * @param source The source to parse
 */
function parse(testCase, source) {
}

/**
 * Format TestCase and return the source.
 *
 * @param testCase TestCase to format
 * @param name The name of the test case, if any. It may be used to embed title into the source.
 */
function format(testCase, name) {
}

/**
 * Format an array of commands to the snippet of source.
 * Used to copy the source into the clipboard.
 *
 * @param The array of commands to sort.
 */
function formatCommands(commands) {
}

/*
 * Formatter for Selenium 2 / WebDriver Erlang (EUnit) client.
 */

if (!this.formatterType) {  // this.formatterType is defined for the new Formatter system
  // This method (the if block) of loading the formatter type is deprecated.
  // For new formatters, simply specify the type in the addPluginProvidedFormatter() and omit this
  // if block in your formatter.
  var subScriptLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
  subScriptLoader.loadSubScript('chrome://selenium-ide/content/formats/webdriver.js', this);
}

function testClassName(testName) {
  return testName.split(/[^0-9A-Za-z]+/).map(
      function(x) {
        return capitalize(x);
      }).join('').charAt(0).toLowerCase();
}

function testMethodName(testName) {
  return "the" + capitalize(testName) + "Test";
}

function nonBreakingSpace() {
  return "\"\\u00a0\"";
}

/* In erlang we use lists */
function array(value) {
  var str = '[';
  for (var i = 0; i < value.length; i++) {
    str += string(value[i]);
    if (i < value.length - 1) str += ", ";
  }
  str += ']';
  return str;
}

Equals.prototype.toString = function() {
  return this.e1.toString() + " =:= " + this.e2.toString();
};

Equals.prototype.assert = function() {
  return "?assert(" + this.e1.toString() + " =:= " + this.e2.toString() + "),";
};

Equals.prototype.verify = function() {
  return verify(this.assert());
};

NotEquals.prototype.toString = function() {
  return this.e1.toString() + " =/= " + this.e2.toString();
};

NotEquals.prototype.assert = function() {
  return "?assert(" + this.e1.toString() + " =/= " + this.e2.toString() + "),";
};

NotEquals.prototype.verify = function() {
  return verify(this.assert());
};

function joinExpression(expression) {
  return "string:join([" + expression.toString() + "], \",\")";
}

function statement(expression) {
  return expression.toString() + ',';
}

function assignToVariable(type, variable, expression) {
  return /*capitalize(type) + " " +*/ variable + " = " + expression.toString();
}

function ifCondition(expression, callback) {
  return "if " + expression.toString() + " ->\n \t" + callback() + "\n end,";
}

function assertTrue(expression) {
  return "?assert(" + expression.toString() + " == true),";
}

function assertFalse(expression) {
  return "?assert(" + expression.toString() + " == false),";
}

function verify(statement) {
    return statement;
}

function verifyTrue(expression) {
  return verify(assertTrue(expression));
}

function verifyFalse(expression) {
  return verify(assertFalse(expression));
}

RegexpMatch.patternToString = function(pattern) {
  if (pattern != null) {
    //value = value.replace(/^\s+/, '');
    //value = value.replace(/\s+$/, '');
    pattern = pattern.replace(/\\/g, '\\\\');
    pattern = pattern.replace(/\"/g, '\\"');
    pattern = pattern.replace(/\r/g, '\\r');
    pattern = pattern.replace(/\n/g, '(\\n|\\r\\n)');
    return '"' + pattern + '"';
  } else {
    return '""';
  }
};

RegexpMatch.prototype.toString = function() {
  return "%TODO regex.ismatch";
//  return "Regex.IsMatch(" + this.expression + ", " + RegexpMatch.patternToString(this.pattern) + ")";
};

function waitFor(expression) {
    return "%TODO wait for 60 second"
/*  return "for (int second = 0;; second++) {\n" +
      indents(1) + 'if (second >= 60) Assert.Fail("timeout");\n' +
      indents(1) + "try\n" +
      indents(1) + "{\n" +
      (expression.setup ? indents(2) + expression.setup() + "\n" : "") +
      indents(2) + "if (" + expression.toString() + ") break;\n" +
      indents(1) + "}\n" +
      indents(1) + "catch (Exception)\n" +
      indents(1) + "{}\n" +
      indents(1) + "Thread.Sleep(1000);\n" +
      "}";*/
}

function assertOrVerifyFailure(line, isAssert) {
  var message = '"expected failure"';
  var failStatement = isAssert ? "?assertError(" + message + ", [])," :
	"io:format(" + message + "),";
//      "verificationErrors.Append(" + message + ");";
  return line + "\n" +
	failStatement + "\n";
/*  return "try\n" +
      "{\n" +
      line + "\n" +
      failStatement + "\n" +
      "}\n" +
      "catch (Exception) {}\n";*/
}

function pause(milliseconds) {
  return "timer:sleep(" + parseInt(milliseconds, 10) + "),";
}

function echo(message) {
  return "io:format(" + xlateArgument(message) + "),";
}

function formatComment(comment) {
  return comment.comment.replace(/.+/mg, function(str) {
    return "% " + str;
  });
}

function keyVariable(key) {
  return "%TODO Keys";
//  return "Keys." + key;
}

this.sendKeysMaping = {
  BKSP: "Backspace",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  ENTER: "Enter",
  SHIFT: "Shift",
  CONTROL: "Control",
  CTRL: "Control",
  ALT: "Alt",
  PAUSE: "Pause",
  ESCAPE: "Escape",
  ESC: "Escape",
  SPACE: "Space",
  PAGE_UP: "PageUp",
  PGUP: "PageUp",
  PAGE_DOWN: "PageDown",
  PGDN: "PageDown",
  END: "End",
  HOME: "Home",
  LEFT: "Left",
  UP: "Up",
  RIGHT: "Right",
  DOWN: "Down",
  INSERT: "Insert",
  INS: "Insert",
  DELETE: "Delete",
  DEL: "Delete",
  SEMICOLON: "Semicolon",
  EQUALS: "Equal",

  NUMPAD0: "NumberPad0",
  N0: "NumberPad0",
  NUMPAD1: "NumberPad1",
  N1: "NumberPad1",
  NUMPAD2: "NumberPad2",
  N2: "NumberPad2",
  NUMPAD3: "NumberPad3",
  N3: "NumberPad3",
  NUMPAD4: "NumberPad4",
  N4: "NumberPad4",
  NUMPAD5: "NumberPad5",
  N5: "NumberPad5",
  NUMPAD6: "NumberPad6",
  N6: "NumberPad6",
  NUMPAD7: "NumberPad7",
  N7: "NumberPad7",
  NUMPAD8: "NumberPad8",
  N8: "NumberPad8",
  NUMPAD9: "NumberPad9",
  N9: "NumberPad9",
  MULTIPLY: "Multiply",
  MUL: "Multiply",
  ADD: "Add",
  PLUS: "Add",
  SEPARATOR: "Separator",
  SEP: "Separator",
  SUBTRACT: "Subtract",
  MINUS: "Subtract",
  DECIMAL: "Decimal",
  PERIOD: "Decimal",
  DIVIDE: "Divide",
  DIV: "Divide",

  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",

  META: "Meta",
  COMMAND: "Command"
};

/**
 * Returns a string representing the suite for this formatter language.
 *
 * @param testSuite  the suite to format
 * @param filename   the file the formatted suite will be saved as
 */
function formatSuite(testSuite, filename) {
  var suiteClass = /^(\w+)/.exec(filename)[1];
  suiteClass = suiteClass[0].toLowerCase() + suiteClass.substring(1);

  var formattedSuite = '-module(' + filename.split('.')[0] + ').\n'
      + '-include_lib("eunit/include/eunit.hrl").\n'
      + '-define(SELENIUM, "http://localhost:4444/wd/hub/").\n'
      + "\n"
      + "setup() ->\n"
      + "  {ok, _Pid} = webdrv_session:start_session(test, ?SELENIUM, webdrv_cap:default_firefox(), 10000).\n"
      + "\n"
      + "teardown() ->\n"
      + "  webdrv_session:stop_session(test).\n"
      + indents(0) + suiteClass + "() ->\n"
      + indents(1) + '{   setup,\n'
      + indents(2) + 'fun setup/0,\n'
      + indents(2) + 'fun teardown/0,\n'
      + indents(2) + 'fun() ->\n'

  for (var i = 0; i < testSuite.tests.length; ++i) {
    var testClass = testSuite.tests[i];
    formattedSuite += indents(4)
        + "%TODO insert test functions here" + testClass + "\n";
  }

  formattedSuite += indents(2) + "end\n"
      + indents(1) + "}\n";

  return formattedSuite;
}

function defaultExtension() {
  return this.options.defaultExtension;
}

WDAPI.Driver = function() {
  this.ref = options.receiver;
};

WDAPI.Driver.searchContext = function(locatorType, locator) {
  var locatorString = xlateArgument(locator);
  switch (locatorType) {
    case 'xpath':
      return '"xpath", ' + locatorString;
    case 'css':
      return '"css", ' + locatorString;
    case 'id':
      return '"id", ' + locatorString;
    case 'link':
      return '"link", ' + locatorString;
    case 'name':
      return '"name", ' + locatorString;
    case 'tag_name':
      return '"tag_name", ' + locatorString;
  }
  throw 'Error: unknown strategy [' + locatorType + '] for locator [' + locator + ']';
};

WDAPI.Driver.prototype.back = function() {
  return this.ref + ":back(" + options.testName + ")";
};

WDAPI.Driver.prototype.close = function() {
  return this.ref + ":close_window(" + options.testName + ")";
};

WDAPI.Driver.prototype.findElement = function(locatorType, locator) {
  return new WDAPI.Element("{ok, Element} = " + this.ref + ":find_element(" + options.testName + ", " + WDAPI.Driver.searchContext(locatorType, locator) + ")");
};

WDAPI.Driver.prototype.findElements = function(locatorType, locator) {
  return new WDAPI.ElementList("{ok, Element} = " + this.ref + ":find_elements(" + options.testName + ", " + WDAPI.Driver.searchContext(locatorType, locator) + ")");
};

WDAPI.Driver.prototype.getCurrentUrl = function() {
  return this.ref + ":get_url(" + options.testName + ")";
};

WDAPI.Driver.prototype.get = function(url) {
  if (url.length > 1 && (url.substring(1,8) == "http://" || url.substring(1,9) == "https://")) { // url is quoted
    return this.ref + ":set_url(" + url + ")";
  } else {
    return this.ref + ":set_url(baseURL + " + url + ")";
  }
};

WDAPI.Driver.prototype.getTitle = function() {
  return this.ref + ":get_page_title(" + options.testName + ")";
};

WDAPI.Driver.prototype.getAlert = function() {
  return "%CloseAlertAndGetItsText()";
};

WDAPI.Driver.prototype.chooseOkOnNextConfirmation = function() {
  return "%acceptNextAlert = true";
};

WDAPI.Driver.prototype.chooseCancelOnNextConfirmation = function() {
  return "%acceptNextAlert = false";
};

WDAPI.Driver.prototype.refresh = function() {
  return this.ref + ":refresh(" + options.testName + ")";
};

WDAPI.Element = function(ref) {
  this.ref = ref + ",\n" + options.receiver;
};

WDAPI.Element.prototype.clear = function() {
  return this.ref + ":clear_element(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.click = function() {
  return this.ref + ":click(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.getAttribute = function(attributeName) {
  return this.ref + ":element_attribute(" + options.testName + ", Element, " + xlateArgument(attributeName) + ")";
};

WDAPI.Element.prototype.getText = function() {
  return this.ref + ":get_text(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.isDisplayed = function() {
  return this.ref + ":is_displayed_element(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.isSelected = function() {
  return this.ref + ":is_selected_element(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.sendKeys = function(text) {
  return this.ref + ":send_keys(" + options.testName + ", Element, " + xlateArgument(text) + ")";
};

WDAPI.Element.prototype.submit = function() {
  return this.ref + ":submit(" + options.testName + ", Element)";
};

WDAPI.Element.prototype.select = function(selectLocator) {
  if (selectLocator.type == 'index') {
    return "%TODO implement select";//"new SelectElement(" + this.ref + ").SelectByIndex(" + selectLocator.string + ")";
  }
  if (selectLocator.type == 'value') {
    return "%TODO implement select";//"new SelectElement(" + this.ref + ").SelectByValue(" + xlateArgument(selectLocator.string) + ")";
  }
  return "%TODO implement select";//"new Select(" + this.ref + ").SelectByText(" + xlateArgument(selectLocator.string) + ")";
};

WDAPI.ElementList = function(ref) {
  this.ref = ref + ",\n" + options.receiver;
};

WDAPI.ElementList.prototype.getItem = function(index) {
  return "%TODO implement getItem";
//  return this.ref + "[" + index + "]";
};

WDAPI.ElementList.prototype.getSize = function() {
  return "%TODO implement getSize";
//  return this.ref + ".Count";
};

WDAPI.ElementList.prototype.isEmpty = function() {
  return "%TODO implement isEmpty";
//  return this.ref + ".Count == 0";
};

WDAPI.Utils = function() {
};

WDAPI.Utils.isElementPresent = function(how, what) {
  return "%TODO implement isElementPresent";
//  return "IsElementPresent(" + WDAPI.Driver.searchContext(how, what) + ")";
};

WDAPI.Utils.isAlertPresent = function() {
  return "%TODO implement IsAlertPresent";
//  return "IsAlertPresent()";
};


/*
 * Optional: The customizable option that can be used in format/parse functions.
 */
this.options = {
  receiver: "webdrv_session",
  testName: "test",
  showSelenese: 'false',
  namespace: "seleniumTests",
  indent: '4',
  initialIndents:  '3',
  header:
   '-module(${namespace}).\n' +
   '-compile(export_all).\n' +
   '-include_lib("eunit/include/eunit.hrl").\n' +
   '-define(SELENIUM, "http://localhost:4444/wd/hub/").\n' +
   '\n' +
   'test() ->\n' +
   '      {ok, _Pid} = webdrv_session:start_session(test, ?SELENIUM, webdrv_cap:default_firefox(), 10000),\n',
  footer: 
   '      webdrv_session:stop_session(' + options.testName + '.).',
  defaultExtension: "erl"
};

/*
 * Optional: XUL XML String for the UI of the options dialog
 */
this.configForm = '<description>Variable for Selenium instance</description>' +
    '<textbox id="options_testName" />';

this.name = "Erlang (WebDriver)";
this.testcaseExtension = ".erl";
this.suiteExtension = ".erl";
this.webdriver = true;

