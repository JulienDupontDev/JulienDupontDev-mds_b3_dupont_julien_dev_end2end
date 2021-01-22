module.exports = {
  'Check Registration block with Commander une course section': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .waitForElementPresent('//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .waitForElementVisible('/html/body')
      .click('//*[@id="answerForm"]/button')
      .assert.elementPresent('//*[@id="error-caption-mobile"]', 'au moins un champs obligatoire n\' a pas été remplit')
    browser.end()
  },
};
