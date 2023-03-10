
This repo contains the actual PyPi package from one of the typosquatted Selenium packages uploaded by user `vseravnonet` on PyPi platform.

In total 17 typosquatted PyPi packages were uploaded by this user on 10th Feb, 2023 of which all are taken down although the user profile still exists on the PyPi pltform.

`Selenium` name was used by this malicious user to create other similar fake names using the technique called `TypoSquatting`

https://pypi.org/user/vseravnonet/

Following files were included part of the PyPi package. 

1. `__init__.py`
2. PKG-INFO
3. setup.py

As the initial code was obfuscated. Thus, i have deobfuscated the main `setup.py` and scripts in two other files which are as below. 

1. Deobfuscated Setup.py (`deObfuscated.py`)
2. Browser Extension Manifest File (`manifest.json`)
3. Browser Extension Code (`browserExtension.js`)

## Detailed Analysis

Detailed analysis can be found below.

- [Dissecting 17 Malicious Selenium Packages Observed On PyPi by Kamran Saifullah](https://www.linkedin.com/pulse/dissecting-17-malicious-selenium-packages-observed-pypi-saifullah/)
- [400+ Malicious Python Packages Manipulating Victim’s Clipboard to Steal Crypto by Jossef Harush Kadouri (Checkmarx)](https://medium.com/checkmarx-security/17-malicious-python-packages-targeting-selenium-users-to-steal-crypto-8d24628ec656)

## Demo

A demo has also been recorded and shared by **Jossef Harush**. It can be found on the below YT link.

- https://youtu.be/fE6gj8RxMns

## Package Removal Credits

The credit of removal of these packages goes to [**Jossef Harush Kadouri** - Head of Software Supply Chain Security](https://www.linkedin.com/in/jossef/) @ Checkmarx.

## Disclaimer

This repo includes the actual and working code. Kindly ensure that it is used in a safe and secure manner for analysis and not to harm anyone else. 

If you are new to Malware Analysis/Reverse Engineering, ensure that you are downloading this repo and are performing the analysis in a safe and secure environment. 

## Follow For More

1. [Twitter](https://twitter.com/deFr0ggy)
2. [LinkedIn](https://linkedin.com/in/KamranSaifullah)
