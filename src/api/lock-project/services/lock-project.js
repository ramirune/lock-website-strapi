'use strict';

/**
 * lock-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-project.lock-project');
