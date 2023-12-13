'use strict';

/**
 * lock-token router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-token.lock-token');
