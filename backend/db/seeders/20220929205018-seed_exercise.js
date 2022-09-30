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
    await queryInterface.bulkInsert('Exercises', [
      {
        title: 'Exercise 1',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 2',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 3',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 4',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 5',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 6',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 7',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Exercise 8',
        description: 'Lorem ipsum',
        imageUrl:
          'https://media.istockphoto.com/vectors/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-vector-id1139912908?k=20&m=1139912908&s=612x612&w=0&h=ljrtdv9NxmtUBrQ_lDzQGDmSQSnTlOMg6J75WWpDS3s=',
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
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
