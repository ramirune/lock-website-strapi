'use strict';

/**
 * lock-project router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-project.lock-project');
