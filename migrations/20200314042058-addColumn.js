'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('userInfos',
     'displayName', Sequelize.STRING
   );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('userInfos',
      'displayName', Sequelize.STRING
    )
  }
};
