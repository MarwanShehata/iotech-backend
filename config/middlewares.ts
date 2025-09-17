// export default [
//   'strapi::logger',
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'script-src': ["'self'", "'unsafe-inline'"],
//         },
//       },
//     },
//   },
//   {
//     name: 'strapi::cors',
//     config: {
//       origin: (ctx) => {
//         const origin = ctx.request.header.origin;
//         const allowedOrigins = [
//           'https://iotech-assessment.vercel.app',
//           'http://localhost:3000',
//           'http://localhost:1337'
//         ];
//         if (allowedOrigins.includes(origin)) {
//           return origin;
//         }
//         if (origin && /^https:\/\/iotech-assessment-.*\.vercel\.app$/.test(origin)) {
//           return origin;
//         }
//         return false;
//       },
//       methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
//       headers: ['Content-Type','Authorization','Origin','Accept'],
//       keepHeaderOnError: true,
//     },
//   },
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

export default [
	"strapi::logger",
	"strapi::errors",
	"strapi::security",
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
