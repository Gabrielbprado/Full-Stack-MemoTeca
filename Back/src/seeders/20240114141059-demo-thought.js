/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
   
        await queryInterface.bulkInsert('thoughts', [
            {
                thought: 'Ola Dev',
                author: 'Gabriel',
                customModel:'Modelo1',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
      
        ], {});
    
    },

    async down (queryInterface, Sequelize) {
    
        await queryInterface.bulkDelete('thoughts', null, {});
     
    }
};
