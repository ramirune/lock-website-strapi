'use strict';

/**
 * lock-token controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lock-token.lock-token');
