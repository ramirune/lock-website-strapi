'use strict';

/**
 * lock-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-token.lock-token');
