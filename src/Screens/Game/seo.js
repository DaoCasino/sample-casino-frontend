import seo from 'Config/Seo';

export const getSeoTitle = (name) =>
  `Play ${name} – 100% On-chain Casino – ${seo.title}`;

export const getSeoDescription = (description) => {
  if (!description) {
    return null;
  }

  const args = [seo.title, seo.shortTitle];
  const arr = description.split('%s');

  if (arr.length === 1) {
    return description;
  }

  let result = '';
  arr.forEach((a) => {
    result += a;
    if (a !== '') {
      const arg = args.shift();
      if (arg) {
        result += arg;
      }
    }
  });
  return result;
};
