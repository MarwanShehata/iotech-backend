// @ts-nocheck

/**
 * This is a placeholder function.
 * You need to implement your own logic to generate the preview pathname.
 * For example, for a "page" content type with a "slug" field:
 * if (uid === 'api::page.page') {
 *   return `/${locale}/pages/${document.slug}`;
 * }
 */
function getPreviewPathname(uid, { locale, document }) {
  const slug = document.slug || document.id;
  const model = uid.split(".").pop();
  return `/${model}/${slug}`;
}

export default ({ env }) => ({
	auth: {
		secret: env("ADMIN_JWT_SECRET"),
	},
	apiToken: {
		salt: env("API_TOKEN_SALT"),
	},
	transfer: {
		token: {
			salt: env("TRANSFER_TOKEN_SALT"),
		},
	},
	secrets: {
		encryptionKey: env("ENCRYPTION_KEY"),
	},
	flags: {
		nps: env.bool("FLAG_NPS", true),
		promoteEE: env.bool("FLAG_PROMOTE_EE", true),
	},
	preview: {
    enabled: true,
    config: {
      allowedOrigins: env("CLIENT_URL"),
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });
        const pathname = getPreviewPathname(uid, { locale, document });
        return `${env('CLIENT_URL')}${pathname}`;
      },
    },
  },
});