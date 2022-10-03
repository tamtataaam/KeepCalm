module.exports = {
  async up(queryInterface) {
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
        title: 'Дневник настроения',
        description: `
        Дневник эмоций особенно хорошо сочетать с психотерапией. В таком дневнике нужно фиксировать, что вызвало у вас приятные эмоции, а что — негативные. Во-первых, так вы сможете понять, насколько вы эмоциональный человек и мешает ли это вам: например, может оказаться, что ваши негативные эмоции влияют на то, как вы общаетесь с людьми, но вы никогда раньше этого не замечали. Во-вторых, вы поймете, что приносит вам радость, а что портит настроение, и тогда вам останется только увеличить в своей жизни место под то, что делает вас счастливым, и постараться избегать факторов, выбивающих из колеи. В-третьих, вы сами или с помощью психотерапевта можете разобраться, почему какие-то вещи вызывают у вас негатив, связано ли это с какими-то страхами или событиями из прошлого и можно ли сделать так, чтобы эти вещи перестали быть для вас неприятными.`,
        imageUrl: 'diary.svg',
        url: '/userdiary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Улучшение сна',
        description: 'Lorem ipsum',
        imageUrl: 'sleep.svg',
        url: '/sleep',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Обсуждения по темам',
        description: 'Lorem ipsum',
        imageUrl: 'chats.svg',
        url: '/chats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Медитации',
        description: 'Lorem ipsum',
        imageUrl: 'meditation.svg',
        url: '/meditation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Упражнения на дыхание',
        description: `«Квадратное» дыхание – эффективный метод управления дыханием. Дыхание называется «квадратным», потому что все его фазы выполняются на определенный равный счет, что напоминает стороны квадрата. Мы делаем вдох на четыре счета, задерживаем дыхание на четыре счета, выдыхаем на четыре счета и опять задерживаем его на четыре счета. Из этой статьи вы узнаете еще об одном способе применения этой техники, который поможет углубить вашу практику. Не волнуйтесь! Поначалу это может показаться сложным, но как только вы освоите схему, вы легко будете выполнять эти упражнения.

        Базовый вариант дыхания:
        
        1. После полного выдоха медленно вдохните, считая до четырех.
        
        2. Задержите дыхание еще на четыре счета.
        
        3. Медленно выдохните, считая до четырех.
        
        4. Задержите дыхание еще на четыре счета.`,
        imageUrl: 'breath.svg',
        url: '/breath',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Статьи',
        description: 'Lorem ipsum',
        imageUrl: 'article.svg',
        url: '/articles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
