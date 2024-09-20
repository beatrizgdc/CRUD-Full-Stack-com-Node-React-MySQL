///////////////////////////////////////////////

//FILES

// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written!');

// fs.readFile('./starter/txt/output.txt', 'utf8', (err, data1) => {
//     if (err) return console.log('Error!');

//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf8', err => {
//                 console.log('Your file has been written');
//             })
//         });
//     });
// });

// console.log('Will read file!');

///////////////////////////////////////////////

const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

//SERVER

const tempOverview = fs.readFileSync(
    `${__dirname}/starter/templates/template-overview.html`,
    'utf-8',
);
const tempOverviewCss = fs.readFileSync(
    `${__dirname}/starter/templates/css-overview.css`,
    'utf-8',
);
const tempCard = fs.readFileSync(
    `${__dirname}/starter/templates/template-card.html`,
    'utf-8',
);
const tempProduct = fs.readFileSync(
    `${__dirname}/starter/templates/template-product.html`,
    'utf-8',
);
const tempProductCss = fs.readFileSync(
    `${__dirname}/starter/templates/css-product.css`,
    'utf-8',
);

const data = fs.readFileSync(
    `${__dirname}/starter/dev-data/data.json`,
    'utf-8',
);
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Remove trailing slash if it exists
    const pathName = pathname.replace(/\/$/, '');

    //Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardsHtml = dataObj
            .map((el) => replaceTemplate(tempCard, el))
            .join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

        res.end(output);

        //Overview css paged
    } else if (pathName === '/overview-css') {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.end(tempOverviewCss);

        //Product page
    } else if (pathName === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        //Product css page
    } else if (pathName === '/product-css') {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.end(tempProductCss);

        //API page
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);

        //Not found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world',
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
