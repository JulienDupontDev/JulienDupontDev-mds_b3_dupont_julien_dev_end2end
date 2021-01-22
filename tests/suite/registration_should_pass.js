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
      .setValue('//*[@id="firstName"]', 'jul')
      .setValue('//*[@id="lastName"]', 'dep')
      .setValue('//*[@id="mobile"]', '0700555809')
      .setValue('//*[@id="email"]', 'spotify20192@gmx.Fr')
      .setValue('//*[@id="addPassword"]', 'Uber2020#,')
      .click('//*[@id="answerForm"]/button')
      .waitForElementVisible('/html/body')
      .assert.elementPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div[1]/div[1]', 'inscription validée')
    browser.end()
  },
};





