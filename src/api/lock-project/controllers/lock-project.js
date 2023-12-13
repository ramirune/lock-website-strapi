'use strict';

/**
 * lock-project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lock-project.lock-project');
