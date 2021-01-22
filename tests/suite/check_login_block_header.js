module.exports = {
  'Check block login in the header wrapper': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button', 'bouton inscription présent')
      .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button', 'bouton connexion présent')
    browser.end()
  }
};
