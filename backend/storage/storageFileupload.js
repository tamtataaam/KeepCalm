const path = require('path');
const util = require('util');

const storage = async (file) => {
  const fileName = file.name;
  console.log(fileName);
  const size = file.data;
  const extension = path.extname(fileName);

  const allowedExtensions = /png|jpeg|jpg|gif|webp/;

  if (!allowedExtensions.test(extension)) throw new Error('Unsupported extension !');

  if (size > 5000000) {
    throw new Error('File must be less than 5MB');
  }

  const { md5 } = file;

  const URL = `/photos/${md5}${extension}`;
  await util.promisify(file.mv)(`./public${URL}`);
  return URL;
};

module.exports = storage;
