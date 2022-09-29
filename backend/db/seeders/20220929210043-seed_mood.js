'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Moods', [
      {
        mood: 'Супер',
        moodUrl:
          'https://e1.pngegg.com/pngimages/711/1002/png-clipart-emoji-sticker-sunglasses-emoji-thumbnail.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Хорошо',
        moodUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBV1a8JumOVN0p78zq_8IZ1JZKOFys1wYUQ&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Так себе',
        moodUrl:
          'https://img1.freepng.fr/20180802/jlo/kisspng-world-emoji-day-smiley-eye-21-emojis-que-deber%C3%ADan-ser-los-%C3%BAnicos-porque-son-5b62bc17e077e6.9416674015331973359194.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Плохо',
        moodUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bPnI87JMV3gCe0goAh-3HUv1W2iDKEt5hw&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Ужасно',
        moodUrl: 'https://image.emojipng.com/480/361480.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Moods', null, {});
  },
};
