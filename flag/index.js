const fs = require('fs');
const CryptoJS = require("crypto-js");
const path = require('path');
const axios = require('axios');
const entities = require('html-entities');
const cheerio = require('cheerio'); //用在DOM进行操作的地方