module.exports = {
  'Check Registration block with Devenir Professional section': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .waitForElementVisible('//*[@id="main"]/section[1]')
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
      .waitForElementVisible('/html/body')
      .assert.urlContains('https://www.uber.com/a/join-new')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input')
      .assert.elementPresent('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input')
    browser.end()
  },
};
