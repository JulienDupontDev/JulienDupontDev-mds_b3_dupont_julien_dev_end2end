module.exports = {
  'Check Registration block with Commander une course section': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .waitForElementVisible('/html/body')
      .assert.urlContains('https://auth.uber.com/login/')
      .assert.elementPresent('//*[@id="firstName"]')
      .assert.elementPresent('//*[@id="lastName"]')
      .assert.elementPresent('//*[@id="mobile"]')
      .assert.elementPresent('//*[@id="email"]')
      .assert.elementPresent('//*[@id="addPassword"]')
    browser.end()
  },
};
