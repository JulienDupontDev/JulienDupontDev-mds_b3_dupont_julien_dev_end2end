
# nightwatch-browserstack

[Nightwatch](http://nightwatchjs.org/) Integration with BrowserStack.

JULIEN DUPONT MDS
  

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

  

<img  src ="http://nightwatchjs.org/img/logo-nightwatch.png"  height = "110">

  

## Setup

* Install dependencies `npm install`

* Update `*.conf.js` files inside the `conf/` directory with your BrowserStack Username and Access Key(https://www.browserstack.com/accounts/settings)

  

## Running your tests

- To run a single test, run `npm run single`

- To run local tests, run `npm run local`

- To run parallel tests, run `npm run parallel`

  

Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

  

## Notes

* You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com)

* To test on a different set of browsers, check out our [capabilities generator](https://www.browserstack.com/automate/capabilities)

* You can export the environment variables for the Username and Access Key of your BrowserStack account

```

export BROWSERSTACK_USERNAME=<browserstack-username> &&

export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>

```



  

# Resultats des tests

  Le site d'uber a une bannière d'information concernant le covid qui s'affiche un peu après le chargement de la page. Cette bannière est bloquante et lorsqu'elle n'est pas encore chargée, les clics sur les boutons ne font rien. 
J'ai donc choisi dans chaque cas de vérifier qu'un contenu à l'intérieur de cette bannière doit être présent pour continuer le test.

## Open Uber Website

```
Running:  Open uber website

√ bouton inscription présent (183ms)
√ bouton connexion présent (299ms)

OK. 2 assertions passed. (4.052s)
```


  

## Check block login in the header wrapper

  Running:  Check block login in the header wrapper

√ bouton inscription présent (291ms)
√ bouton connexion présent (255ms)

OK. 2 assertions passed. (6.993s)

## Check login block in two sections

  ```
  Running:  Check login block in two sections
  
  √ Element <//*[@id="main"]/section[1]> was visible after 1998 milliseconds.
√ section chauffeur présente (5341ms)
√ section passager présente (132ms)

OK. 3 assertions passed. (16.747s)
  ```

## Check login chauffeur section

  ```
  Running:  Check login chauffeur section
√ Element <//*[@id="main"]/section[1]> was visible after 458 milliseconds.
√ Element </html/body> was visible after 429 milliseconds.
√ Testing if the URL is 'https://auth.uber.com/login/?next_url=https%3A%2F%2Fdrive
√ Testing if element <//*[@id="useridInput"]> is present (238ms)
√ Testing if element <//*[@id="app-body"]/div/div[1]/form/div[2]/button> is present (514ms)

OK. 5 assertions passed. (17.851s)

  See more info, video, & screenshots on Browserstack:
  https://automate.browserstack.com/builds/bc05570e69138f097d6b143c6ba535d87f9ff603/sessions/1774599c59b751deb6c56fabe19a3e4c43cd84ab
  ```
  

## Check login passager section

```
Running:  Check login passager section

√ Element <//*[@id="main"]/section[1]> was visible after 445 milliseconds.
√ Element <//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a> was visible after 1019 milliseconds.
√ Element </html/body> was visible after 358 milliseconds.
√ Testing if the URL contains 'https://auth.uber.com/login/' (113ms)
√ Testing if element <//*[@id="mobile"]> is present (118ms)
√ Testing if element <//*[@id="next-button"]> is present (436ms)
√ Element </html/body> was visible after 326 milliseconds.
√ Testing if element <//*[@id="app-content"]/div/div/div/div/div/a[1]> is present (169ms)
√ Testing if element <//*[@id="googleLoginButton"]> is present (125ms)

OK. 9 assertions passed. (17.224s)


```
  

## Check Registration block in two sections
```
Running:  Check Registration block in two sections

√ Element <//*[@id="main"]/section[1]> was visible after 363 milliseconds.
√ Testing if element <//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a> is present (903ms)
√ Testing if element <//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a> is present (130ms)

OK. 3 assertions passed. (8.161s)
```
## Check Registration block with Devenir Professional section

 ```
Running:  Check Registration block with Devenir Professional section

√ Element <//*[@id="main"]/section[1]> was visible after 421 milliseconds.
√ Element <//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]> was present after 729 milliseconds.
√ Element </html/body> was visible after 258 milliseconds.
√ Testing if the URL contains 'https://www.uber.com/a/join-new' (137ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input> is present (349ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input> is present (189ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input> is present (133ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input> is present (130ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input> is present (153ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input> is present (99ms)
√ Testing if element <//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input> is present (148ms)

OK. 11 assertions passed. (14.628s)
```
  

## Check Registration block with Commander une course section

  ```
Running:  Check Registration block with Commander une course section 
 
√ Element <//*[@id="main"]/section[1]> was visible after 427 milliseconds.
√ Element <//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]> was present after 689 milliseconds.
√ Element </html/body> was visible after 271 milliseconds.
√ Testing if the URL contains 'https://auth.uber.com/login/' (109ms)
√ Testing if element <//*[@id="firstName"]> is present (136ms)
√ Testing if element <//*[@id="lastName"]> is present (191ms)
√ Testing if element <//*[@id="mobile"]> is present (215ms)
√ Testing if element <//*[@id="email"]> is present (122ms)
√ Testing if element <//*[@id="addPassword"]> is present (114ms)

OK. 9 assertions passed. (17.755s)
```

## Registration with Commander une course section shouldn't pass

```
Running:  Registration with Commander une course section shouldn't pass

√ Element <//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]> was present after 714 milliseconds.
√ Element </html/body> was visible after 282 milliseconds.
√ au moins un champs obligatoire n' a pas été remplit (488ms)

OK. 3 assertions passed. (14.312s)
```
  

## Registration should pass

  Vous devez modifier le fichier 'registration_should_pass.js' et mettre un email non enregistré sur uber, un numéro non utilisé.

```Running: Check Registration block with Commander une course section

  

√ Element <//*[@id="main"]/section[1]/div/div/div/div/div/div/div/div[1]> was present after 897 milliseconds.

√ Element </html/body> was visible after 196 milliseconds.

√ Testing if the URL contains 'https://auth.uber.com/login/' (171ms)

√ Element </html/body> was visible after 190 milliseconds.

√ inscription validée (746ms)

 
OK. 5 assertions passed. (21.593s)

```