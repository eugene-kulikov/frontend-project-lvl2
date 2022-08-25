### Hexlet tests and linter status:
[![Actions Status](https://github.com/Ecool88/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Ecool88/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/2694d685067e12b1ddc0/maintainability)](https://codeclimate.com/github/Ecool88/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2694d685067e12b1ddc0/test_coverage)](https://codeclimate.com/github/Ecool88/frontend-project-lvl2/test_coverage)
[![Node CI](https://github.com/Ecool88/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/Ecool88/frontend-project-lvl2/actions/workflows/nodejs.yml)

# Название проекта

#### Вычислитель отличий

## Описание проекта

**Вычислитель отличий** — это CLI программа, определяющая разницу  между двумя файлами. Поддерживаемые форматы: JSON, XML, YAML. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

## Как установить:
1. Убедитесь, что вы установили [Node.js](https://nodejs.org/en/) не ниже версии 12: ```node -v```.
2. Склонируйте репозиторий: ```git@github.com:Ecool88/frontend-project-lvl2.git```.
3. Смените каталог на frontend-project-lvl2.
4. Запустите команду: ```make install```.

```shell
$ git@github.com:Ecool88/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```
## Запуск тестов:
```shell
$ make test
```
[![asciicast](https://asciinema.org/a/Pa0ruMmAqtWcplI7jJmVSp2IN.svg)](https://asciinema.org/a/Pa0ruMmAqtWcplI7jJmVSp2IN)

## Как использовать:
Вы можете использовать проект как скрипт в терминале или как библиотеку в своем JavaScript проекте. Вы можете получить разницу между двумя файлами в 3 форматах: stylish (по умолчанию), plain и json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (default: "stylish")
  -h, --help             display help for command
```
## Примеры

### Сравнение плоских файлов json:
[![asciicast](https://asciinema.org/a/16QSKg1cvOjqHupUPRsaFey4d.svg)](https://asciinema.org/a/16QSKg1cvOjqHupUPRsaFey4d)
### Сравнение вложенных файлов json:
[![asciicast](https://asciinema.org/a/FP2uNJedSQvHqlFptG5KtEJgX.svg)](https://asciinema.org/a/FP2uNJedSQvHqlFptG5KtEJgX)
### Сравнение файлов yml:
[![asciicast](https://asciinema.org/a/mkAB2cD4g2zTBSn62M9j58Hqv.svg)](https://asciinema.org/a/mkAB2cD4g2zTBSn62M9j58Hqv)
### Сравнение файлов json в формате plain:
[![asciicast](https://asciinema.org/a/5nKhEwNThmYpkCUBA3tbK4xvr.svg)](https://asciinema.org/a/5nKhEwNThmYpkCUBA3tbK4xvr)
### Сравнение файлов yml в формате json:
[![asciicast](https://asciinema.org/a/FPmdnMdaWPZqEnBN3y2r9Lfgh.svg)](https://asciinema.org/a/FPmdnMdaWPZqEnBN3y2r9Lfgh)
