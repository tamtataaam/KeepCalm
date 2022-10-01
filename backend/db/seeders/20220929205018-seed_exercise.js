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
        title: 'Дневник эмоций',
        description: `
        Дневник эмоций особенно хорошо сочетать с психотерапией. В таком дневнике нужно фиксировать, что вызвало у вас приятные эмоции, а что — негативные. Во-первых, так вы сможете понять, насколько вы эмоциональный человек и мешает ли это вам: например, может оказаться, что ваши негативные эмоции влияют на то, как вы общаетесь с людьми, но вы никогда раньше этого не замечали. Во-вторых, вы поймете, что приносит вам радость, а что портит настроение, и тогда вам останется только увеличить в своей жизни место под то, что делает вас счастливым, и постараться избегать факторов, выбивающих из колеи. В-третьих, вы сами или с помощью психотерапевта можете разобраться, почему какие-то вещи вызывают у вас негатив, связано ли это с какими-то страхами или событиями из прошлого и можно ли сделать так, чтобы эти вещи перестали быть для вас неприятными.`,
        imageUrl:
          'https://thumb.tildacdn.com/tild3935-3463-4564-b533-373931396264/-/format/webp/Artboard32x.jpg',
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
