module.exports = {
  'Open uber website': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('head')
      .assert.elementPresent('title')
      .assert.not.title('', 'Titre présent et non vide')
      .end();
  }
};
