'use strict';

/**
 * academic-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic-course.academic-course');
