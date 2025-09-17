export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://iotech-assessment.vercel.app', 'http://localhost:3000', 'http://localhost:1337', /^https:\/\/iotech-assessment-.*\.vercel\.app$/],
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      headers: ['Content-Type','Authorization','Origin','Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


OPTIONS /api/service-collections?populate=services HTTP/2
Host: hopeful-creativity-5e88e07756.strapiapp.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:142.0) Gecko/20100101 Firefox/142.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
Access-Control-Request-Method: GET
Access-Control-Request-Headers: authorization,content-type
Origin: https://iotech-assessment-jmrw6uhd8-marwanshehatas-projects.vercel.app
Sec-GPC: 1
Connection: keep-alive
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
TE: trailers
Priority: u=4
Pragma: no-cache
Cache-Control: no-cache
Referer: https://iotech-assessment-jmrw6uhd8-marwanshehatas-projects.vercel.app/



HTTP/2 200 
date: Wed, 17 Sep 2025 01:26:27 GMT
content-type: text/plain; charset=utf-8
content-length: 0
cf-ray: 9804d0c22e262e37-MRS
allow: HEAD, GET, POST
content-security-policy: frame-src https://iotech-assessment.vercel.app;connect-src 'self' https:;img-src 'self' data: blob: https://hopeful-creativity-5e88e07756.media.strapiapp.com https://hopeful-creativity-5e88e07756.fra1.digitaloceanspaces.com https://hopeful-creativity-5e88e07756.nyc3.digitaloceanspaces.com *.strapi.io;media-src 'self' data: blob: https://hopeful-creativity-5e88e07756.media.strapiapp.com https://hopeful-creativity-5e88e07756.fra1.digitaloceanspaces.com https://hopeful-creativity-5e88e07756.nyc3.digitaloceanspaces.com *.strapi.io;default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'
referrer-policy: no-referrer
strict-transport-security: max-age=31536000; includeSubDomains
vary: Origin
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-permitted-cross-domain-policies: none
x-powered-by: Strapi <strapi.io>
x-do-app-origin: 7ba488af-38e7-4ef8-9087-5a0e3036ca40
cache-control: private
x-do-orig-status: 200
cf-cache-status: DYNAMIC
set-cookie: __cf_bm=BIy1omnECdXizrLJUHuVK_Uu1.6ecVcK25YBgBMzkXk-1758072387-1.0.1.1-s2bHw06xmntg804Nsxu.GrLqTV89w1d3HyNWaY2pvkc6tB7QpVIo9G97DtUrgIuLyrsRt8Zl32dhkFvxF_ndkaOu2fd1ztgLKWlP_jCrNFc; path=/; expires=Wed, 17-Sep-25 01:56:27 GMT; domain=.hopeful-creativity-5e88e07756.strapiapp.com; HttpOnly; Secure; SameSite=None
server: cloudflare
alt-svc: h3=":443"; ma=86400
X-Firefox-Spdy: h2


