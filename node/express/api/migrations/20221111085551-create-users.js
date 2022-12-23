"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      email_verified_at: {
        type: Sequelize.DATE,
      },
      role_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "roles",
          },
          key: "id",
        },
        allowNull: false,
      },
      created_at: {
        fields: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        fields: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
